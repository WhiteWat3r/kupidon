import { useAppDispatch, useAppSelector } from '../store/store';
import {
  decreaseArrows,
  setCurrentScreen,
  setGameResult,
  setIntermediateGuys,
} from '../store/gameSlice';
import { SCREENS } from '../types/screens';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import map from '../assets/images/backgrounds/map.png';

import { defaultGuys, guys } from '../utils/constants';
import { useEffect, useState } from 'react';
import { Profile } from '../components/Profile';
import { IGuy } from '../types/guys';
import { ArrowsCounter } from '../components/ArrowsCounter';
import { PauseButton } from '../components/PauseButton';
import { Pause } from '../components/Pause';
import { Hearts } from '../components/Hearts';

export const Game = () => {
  const dispatch = useAppDispatch();

  const arrowsCount = useAppSelector((store) => store.game.arrows);
  const intermediateGuys = useAppSelector((store) => store.game.intermediateGuys);

  const [availableGuys, setAvailableGuys] = useState(
    intermediateGuys.length > 0 ? guys.filter((g) => !intermediateGuys.includes(g)) : [...guys],
  );
  const [currentGuy, setCurrentGuy] = useState(guys[0]);
  const [clickedOnBoardGuy, setClickedOnBoardGuy] = useState<IGuy | undefined>(undefined);
  const [happyGuys, setHappyGuys] = useState<IGuy[]>(
    intermediateGuys.length > 0 ? intermediateGuys : [],
  );
  const [isPaused, setIsPaused] = useState(false);
  const [lvlStatus, setLvlStatus] = useState(1);

  //1 - начало
  //2 - успех
  //3 - неудача

  const [isProcessing, setIsProcessing] = useState(false); // стейт для блокировки нажатий во время результата

  const getGuy = () => {
    if (availableGuys.length === 0) {
      // если персы закончились - обновить (мб потом убрать)
      setAvailableGuys([...guys]);
    } else {
      // получение рандомного перса
      const randomIndex = Math.floor(Math.random() * availableGuys.length);
      const selectedGuy = availableGuys[randomIndex];

      // удаление созданного перса
      setAvailableGuys((prevGuys) => prevGuys.filter((guy) => guy.id !== selectedGuy.id));

      // сохранение перса
      setCurrentGuy(selectedGuy);
    }
  };

  const handleClick = (human: IGuy) => {
    if (isProcessing) return; // если на экране таймер perfect match еще не закончился - не реагируем

    if (human.gender === currentGuy.gender) return; // поддерживаем  традиционные ценности

    setIsProcessing(true);

    setClickedOnBoardGuy(human); // выбор перса на карте, по которому был совершен клик
    if (human.name === currentGuy.lookingFor) {
      // если это perfect match, то добавление персонажа в список нашедших и сохранение результата в переменную
      setHappyGuys([...happyGuys, currentGuy]);
      setLvlStatus(2);
      // console.log('успех');

      setTimeout(() => {
        if (availableGuys.length === 0) {
          dispatch(setCurrentScreen(SCREENS.THE_RESULT)); // если свободныз ребяток больше нет - к результату
          dispatch(setIntermediateGuys([])); // чистим массив персонажей в сторе
        } else {
          getGuy(); // иначе спавним нового
        }
      }, 2000);
    } else {
      setLvlStatus(3);
      dispatch(decreaseArrows());
    }

    setTimeout(() => {
      // console.log(lvlStatus);

      setLvlStatus(1);
      setClickedOnBoardGuy(undefined);

      setIsProcessing(false);
    }, 200); // через две секунды после результата получаем нового перса
  };

  useEffect(() => {
    getGuy();
  }, []); // первый персонаж

  useEffect(() => {
    if (arrowsCount === 0 && availableGuys.length > 0) {
      dispatch(setIntermediateGuys(happyGuys)); //  сохрнаняем массив персонажей, которые нашли пару, если игрок зашерит помощь
      dispatch(setCurrentScreen(SCREENS.THE_SHARE));
    }
  }, [arrowsCount]); // стрелы закончились - на страницу шера (отправляем только если это не ласт уровень)

  useEffect(() => {
    dispatch(setGameResult(happyGuys.length < 4 ? 1 : happyGuys.length < 7 ? 2 : 3));
    // happyGuys.length === 10 && dispatch(setCurrentScreen(SCREENS.THE_RESULT));
  }, [happyGuys]); // обновление результата

  // console.log(availableGuys.length, 'Сколько осталось');
  // console.log(happyGuys.length, 'Сколько пар');

  return (
    <div className="flex flex-col justify-between h-full relative overflow-hidden">
      <div>Правильных - {happyGuys.length}</div>
      <TransformWrapper
        centerOnInit={true}
        disablePadding={true}
        panning={{
          velocityDisabled: true,
        }}
        minScale={0.8}
        initialScale={0.8}
        maxScale={2}
        wheel={{ smoothStep: 0.03 }}>
        <TransformComponent wrapperStyle={{ maxHeight: '100%', maxWidth: '100%' }}>
          <div className={`relative h-full`}>
            {defaultGuys.map((i) => (
              <span
                className={`absolute    cursor-pointer`}
                key={i.id}
                style={{
                  top: `${(i.top / 2 / 667) * 100}%`,
                  left: `${(i.left / 2 / 1187) * 100}%`,
                  height: i.height,
                  width: i.width,
                }}
                onClick={() => handleClick(i)}
              />
            ))}

            {guys.map((i) => (
              <img
                src={i.img}
                className={`absolute cursor-pointer transition-opacity delay-200 ${
                  happyGuys.includes(i) ? 'opacity-1' : 'opacity-0'
                }`}
                key={i.id}
                style={{
                  top: `${(i.top / 2 / 667) * 100}%`,
                  left: `${(i.left / 2 / 1187) * 100}%`,
                  height: i.height,
                  width: i.width,
                }}
                // onClick={() => handleClick(i)}
              />
            ))}

            <img className={'h-full max-w-none'} src={map} alt="Карта" />
          </div>
        </TransformComponent>

        <PauseButton onClick={() => setIsPaused(!isPaused)} />

        {isPaused && <Pause setIsPaused={setIsPaused} />}

        <ArrowsCounter arrowsCount={arrowsCount} isPaused={isPaused} />

        <Hearts lvlStatus={lvlStatus} isPaused={isPaused} />

        <Profile
          currentGuy={currentGuy}
          lvlStatus={lvlStatus}
          clickedOnBoardGuy={clickedOnBoardGuy}
          isPaused={isPaused}
        />
      </TransformWrapper>
    </div>
  );
};
