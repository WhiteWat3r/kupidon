import { useAppDispatch, useAppSelector } from '../store/store';
import {
  setCurrentScreen,
  setGameResult,
  setIntermediateGuys,
} from '../store/gameSlice';
import { SCREENS } from '../types/screens';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import map from '../assets/images/backgrounds/map.png';
import kupidon from '../assets/images/angel/kupidon.png';


import { defaultGuys, guys } from '../utils/constants';
import { useEffect, useState } from 'react';
import { Profile } from '../components/Profile';
import { IGuy } from '../types/guys';
import { Timer } from '../components/Timer';
import { Hearts } from '../components/Hearts';

import profileSound from '../assets/music/anketa.mp3';
import personClick from '../assets/music/personClick.mp3';
import successMatch from '../assets/music/successMatch.mp3';
import unSuccessMatch from '../assets/music/unSuccessMatch.mp3';
import { useSound } from '../hooks/useSound';
import classNames from 'classnames';

export const Game = () => {
  const dispatch = useAppDispatch();
  const isSoundOn = useAppSelector((store) => store.game.isSoundOn);
  const [timer, setTimer] = useState(150);
  const intermediateGuys = useAppSelector((store) => store.game.intermediateGuys);

  const [availableGuys, setAvailableGuys] = useState(
    intermediateGuys.length > 0 ? guys.filter((g) => !intermediateGuys.includes(g)) : [...guys],
  );
  const [currentGuy, setCurrentGuy] = useState(guys[0]);
  const [clickedOnBoardGuy, setClickedOnBoardGuy] = useState<IGuy | undefined>(undefined);
  const [happyGuys, setHappyGuys] = useState<IGuy[]>(
    intermediateGuys.length > 0 ? intermediateGuys : [],
  );
  const [lvlStatus, setLvlStatus] = useState(1);

  const [isProcessing, setIsProcessing] = useState(false); // стейт для блокировки нажатий во время результата

  const [playPersonClick] = useSound(personClick);
  const [playSuccessMatch] = useSound(successMatch);
  const [playUnSuccessMatch] = useSound(unSuccessMatch);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const handleClick = (human: IGuy) => {
    if (isProcessing) return; // если на экране таймер perfect match еще не закончился - не реагируем

    if (human.gender === currentGuy.gender) return; // поддерживаем  традиционные ценности

    setIsProcessing(true);
    playPersonClick();

    setClickedOnBoardGuy(human); // выбор перса на карте, по которому был совершен клик
    if (human.name === currentGuy.lookingFor) {
      // если это perfect match, то добавление персонажа в список нашедших и сохранение результата в переменную

      setTimeout(() => {
        playSuccessMatch();
      }, 200);

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
      setTimeout(() => {
        playUnSuccessMatch();
      }, 200);
      setLvlStatus(3);
    }

    setTimeout(() => {
      setLvlStatus(1);
      setClickedOnBoardGuy(undefined);
      setIsProcessing(false);

      if (isSoundOn) {
        const audio = new Audio(profileSound);
        audio.play();
      }
    }, 2000); // через две секунды после результата получаем нового перса
  };

  useEffect(() => {
    getGuy();
  }, []); // первый персонаж

  useEffect(() => {
    if (timer < 1) {
      dispatch(setIntermediateGuys(happyGuys)); //  сохрнаняем массив персонажей, которые нашли пару, если игрок зашерит помощь
      dispatch(setCurrentScreen(SCREENS.THE_SHARE));
    }
  }, [timer]); // стрелы закончились - на страницу шера (отправляем только если это не ласт уровень)

  useEffect(() => {
    dispatch(setGameResult(happyGuys.length < 4 ? 1 : happyGuys.length < 7 ? 2 : 3));
    // happyGuys.length === 10 && dispatch(setCurrentScreen(SCREENS.THE_RESULT));
  }, [happyGuys]); // обновление результата

  // console.log(availableGuys.length, 'Сколько осталось');
  // console.log(happyGuys.length, 'Сколько пар');

  return (
    <div className="flex flex-col justify-between h-full relative overflow-hidden">
      {/* <div>Правильных - {happyGuys.length}</div> */}
      <TransformWrapper
        centerOnInit={true}
        disablePadding={true}
        panning={{
          velocityDisabled: true,
        }}
        minScale={0.35}
        initialScale={0.35}
        maxScale={0.35}
      // wheel={{ smoothStep: 0.03 }}
      >
        <TransformComponent wrapperStyle={{ maxHeight: '100%', maxWidth: '100%' }}>
          <div className={`relative h-full`}>
            {defaultGuys.map((i) => (
              <span
                  className={classNames(`absolute    cursor-pointer`, happyGuys.filter((guy) => guy.lookingFor === i.name).length > 0 && 'pointer-events-none')}
                key={i.id}
                style={{
                  top: `${(i.top / 2 / 667) * 100}%`,
                  left: `${(i.left / 2 / 1187) * 100}%`,
                  height: i.height * 2,
                  width: i.width * 2,
                }}
                onClick={() => handleClick(i)}
              />
            ))}

            {guys.map((i) => (
              <img
                src={i.img}
                className={`absolute cursor-pointer transition-opacity delay-300  ${happyGuys.includes(i) ? 'opacity-1' : 'opacity-0'
                  }`}
                key={i.id}
                style={{
                  top: `${(i.top / 2 / 667) * 100}%`,
                  left: `${(i.left / 2 / 1187) * 100}%`,
                  height: i.height * 2,
                  width: i.width * 2,
                }}
              // onClick={() => handleClick(i)}
              />
            ))}

            <img className={'h-full max-w-none'} src={map} alt="Карта" />
          </div>
        </TransformComponent>

        <img src={kupidon} alt="Купидон" className=' absolute top-[20px] right-[20px] z-20 w-[74px]' />

        <Timer time={timer} />

        <Hearts lvlStatus={lvlStatus} />
        <Profile
          currentGuy={currentGuy}
          lvlStatus={lvlStatus}
          clickedOnBoardGuy={clickedOnBoardGuy}
        />
      </TransformWrapper>
    </div>
  );
};
