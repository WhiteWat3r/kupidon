import { useAppDispatch } from '../store/store';
import { Button } from '../components/Button';
import { setCurrentScreen, updateArrows } from '../store/gameSlice';
import { SCREENS } from '../types/screens';
import { ShareBlock } from '../components/ShareBlock';
import { useEffect, useState } from 'react';
import { useSound } from '../hooks/useSound';
import shareScreen from '../assets/music//shareScreen.mp3';

export const Share = () => {
  const dispatch = useAppDispatch();
  const [playShareScreenMusic] = useSound(shareScreen);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleNavigateToResult = () => {
    dispatch(setCurrentScreen(SCREENS.THE_RESULT));
  };

  const handleNavigateToGame = () => {
    dispatch(updateArrows());
    dispatch(setCurrentScreen(SCREENS.THE_GAME));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 2000);
  }, []);

  useEffect(() => {
    playShareScreenMusic();
  }, []);
  return (
    <div className="flex flex-col items-center h-full bg-cover !bg-[center_bottom_-20px] text-center pt-[84px] pb-[47px] gap-[20px] bg-share">
      <h1 className="h1-text">Упс!</h1>

      <p className="max-w-[320px] p-text mb-auto">
        У тебя закончилось  время!
        Позови на помощь друга, чтобы продолжить.
      </p>

      <ShareBlock shareResult={'help'} onClick={handleNavigateToGame} />

      <div className="w-[170px]">
        <Button onClick={handleNavigateToResult} isDisabled={isButtonDisabled}>
          Не хочу
        </Button>
      </div>
    </div>
  );
};
