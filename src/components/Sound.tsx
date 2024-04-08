import { useEffect, useRef, useState } from 'react';
import soundOn from '../assets/images/buttons/soundOn.svg';
import soundOff from '../assets/images/buttons/soundOff.svg';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setIsSoundOn } from '../store/gameSlice';

import defaultMusic from "../assets/music/defaultMusic.mp3"
import gameMusic from "../assets/music/gameMusic.mp3"

export const Sound = () => {
  const dispatch = useAppDispatch();

  const [currentMusic, setCurrentMusic] = useState(defaultMusic);

  const isSoundOn = useAppSelector((store) => store.game.isSoundOn);
  const currentRoute = useAppSelector((store) => store.game.currentScreen);

  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleSound = () => {
    dispatch(setIsSoundOn());
  }; // включение/выключение звука
  useEffect(() => {
    if (isSoundOn) {
      setCurrentMusic(
        currentRoute === 'THE_GAME' ? gameMusic : defaultMusic,
      );
    }
  }, [currentRoute, isSoundOn]); // обновление музыки только при изменении роута или состояния звука

  useEffect(() => {
    if (audioRef.current) {
      if (!isSoundOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  }, [currentMusic, isSoundOn]); // обновление воспроизведения при изменении музыки или состояния звука

  return (
    <>
      <div
        className="absolute flex top-[20px] left-[20px] cursor-pointer bg-custom-blue w-[45px] h-[43px] justify-center items-center rounded-[12px] rounded-br-[24px] border border-1 border-black shadow-sound z-20"
        onClick={toggleSound}>
        <img src={isSoundOn ? soundOn : soundOff} alt="Звуки" />
      </div>
      <audio ref={audioRef} loop key={currentMusic}>
        <source src={currentMusic} type="audio/mpeg" />
      </audio>
    </>
  );
};
