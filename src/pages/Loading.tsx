import { useEffect, useRef, useState } from 'react';

import soundOn from '../assets/images/buttons/soundOn.svg';
import soundOff from '../assets/images/buttons/soundOff.svg';

import angelImg from '../assets/images/angel/angel-1.svg';
import hand from '../assets/images/hands/hand.svg';
import profile1 from '../assets/images/profiles/profile1.png';
import arrows from '../assets/images/arrows.png';

import bg1 from '../assets/images/backgrounds/main-bg.png';
import bgFull from '../assets/images/backgrounds/main-full-bg.png';

import comicsBg1 from '../assets/images/backgrounds/angel-1.png';
import comicsBg2 from '../assets/images/backgrounds/angel-2.png';
import comicsBg3 from '../assets/images/backgrounds/angel-3.png';

import result1 from '../assets/images/backgrounds/result-1.png';
import result2 from '../assets/images/backgrounds/result-2.png';
import result3 from '../assets/images/backgrounds/result-3.png';

import share from '../assets/images/backgrounds/share.png';
import map from '../assets/images/backgrounds/map.png';





import girlWithDog from '../assets/images/profiles/girl-with-dog.png';
import ScooterGirl from '../assets/images/profiles/ScooterGirl.png';
import GirlInCoat from '../assets/images/profiles/GirlInCoat.png';
import girlWithBook from '../assets/images/profiles/girlWithBook.png';
import girlInRedDress from '../assets/images/profiles/girlInRedDress.png';
import manWithGuitar from '../assets/images/profiles/manWithGuitar.png';
import manWithCar from '../assets/images/profiles/manWithCar.png';
import girlInPink from '../assets/images/profiles/girlInPink.png';
import skateboarder from '../assets/images/profiles/skateboarder.png';
import manWithCoffee from '../assets/images/profiles/manWithCoffee.png';

import man from '../assets/images/profiles/maleAvatar.png';
import girl from '../assets/images/profiles/femaleAvatar.png';

import vitalik from '../assets/images/profiles/vitalik.png';
import kostya from '../assets/images/profiles/kostya.png';
import jora from '../assets/images/profiles/jora.png';
import kirill from '../assets/images/profiles/kirill.png';
import sanek from '../assets/images/profiles/sanek.png';
import masha from '../assets/images/profiles/masha.png';
import viola from '../assets/images/profiles/viola.png';
import max from '../assets/images/profiles/max.png';
import katya from '../assets/images/profiles/katya.png';
import vika from '../assets/images/profiles/vika.png';

import vitalikImg from '../assets/images/peopleImgs/vitalikImg.png';
import kostyaImg from '../assets/images/peopleImgs/kostyaImg.png';
import joraImg from '../assets/images/peopleImgs/joraImg.png';
import kirillImg from '../assets/images/peopleImgs/kirillImg.png';
import sanyaImg from '../assets/images/peopleImgs/sanyaImg.png';
import maxImg from '../assets/images/peopleImgs/maxImg.png';
import mashaImg from '../assets/images/peopleImgs/mashaImg.png';
import violaImg from '../assets/images/peopleImgs/violaImg.png';
import katyaImg from '../assets/images/peopleImgs/katyaImg.png';
import vikaImg from '../assets/images/peopleImgs/vikaImg.png';
import { IGuy } from '../types/guys';












import { useDispatch } from 'react-redux';
import { setCurrentScreen } from '../store/gameSlice';
import { SCREENS } from '../types/screens';

const images = [
  angelImg,
  soundOn,
  soundOff,
  bg1,
  bgFull,
  comicsBg1,
  comicsBg2,
  comicsBg3,
  result1,
  result2,
  result3,
  share,
  hand,
  profile1,
  arrows,
  girlWithDog,
  ScooterGirl,
  GirlInCoat,
  girlWithBook,
  girlInRedDress,
  manWithGuitar,
  manWithCar,
  girlInPink,
  skateboarder,
  manWithCoffee,
  man,
  girl,
  vitalik,
  kostya,
  jora,
  kirill,
  sanek,
  masha,
  viola,
  max,
  katya,
  vika,
  vitalikImg,
  kostyaImg,
  joraImg,
  kirillImg,
  sanyaImg,
  maxImg,
  mashaImg,
  violaImg,
  katyaImg,
  vikaImg,
  map
];

const Loading = () => {
  const dispatch = useDispatch();
  const init = useRef(false);
  const [activeText, setActiveText] = useState(0);
  const texts = ['Составляем анкеты', 'Направляем стрелы', 'Меняем направление', 'Ищем пары'];

  useEffect(() => {
    if (init.current) return;

    init.current = true;

    const imagePromises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve(true);
        };
        img.onerror = (
          // event, source, lineno, colno,
          error,
        ) => reject(error);
        img.src = src;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        dispatch(setCurrentScreen(SCREENS.THE_COMICS));
      })
      .catch((e) => {
        dispatch(setCurrentScreen(SCREENS.THE_COMICS));
        console.error('Ошибка загрузки изображений: ', e);
      });
  }, []); // навигация после загрузки всех изображений

  useEffect(() => {
    const interval = setInterval(
      () => setActiveText((x) => (x === texts.length - 1 ? 0 : x + 1)),
      2000,
    );
    return () => clearInterval(interval);
  }); // автоматически меняющийся текст загрузки изображений каждые 2 секунды.

  return (
    <div
      className={
        'w-full h-full flex flex-col items-center bg-main-full-bg bg-cover bg-center'
      }>
      <img
        className="absolute top-[40px] h-[360px] object-none w-full"
        src={angelImg}
        alt="Ангел"
      />

      <div className="mt-auto flex flex-col items-center mb-[172px]">
        <h1 className="h1-text">Загрузка...</h1>

        <div className="mt-[35px] p-text">{texts[activeText]}</div>
      </div>
    </div>
  );
};

export default Loading;
