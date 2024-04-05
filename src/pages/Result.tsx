import { Button } from '../components/Button';

import { resultTexts } from '../utils/constants';
import { useAppDispatch, useAppSelector } from '../store/store';
import { useEffect } from 'react';
import classNames from 'classnames';
import { ShareBlock } from '../components/ShareBlock';
import { SCREENS } from '../types/screens';
import { setCurrentScreen, updateArrows } from '../store/gameSlice';

export const Result = () => {
  const dispatch = useAppDispatch();
  const isSoundOn = useAppSelector((store) => store.game.isSoundOn);

  const { gameResult } = useAppSelector((store) => store.game);

  const shareResult = gameResult === 1 ? 'bad' : gameResult === 2 ? 'good' : 'excellent';

  
  const handleNavigate = () => {
    dispatch(updateArrows());

    dispatch(setCurrentScreen(SCREENS.THE_GAME));
  }; // Навигация к игре

  useEffect(() => {
    if (isSoundOn) {
      const audio = new Audio('/music/finish.mp3');
      audio.play();
    }
  }, []); // звук финиша при попадании на страницу с результатом

  console.log(gameResult);

  return (
    <div
      className={classNames(
        `flex flex-col items-center h-full bg-cover !bg-[center_bottom_-20px] text-center pt-[84px] pb-[47px] gap-[20px]  
        
        bg-result-${gameResult}`,

        gameResult === 1 ? 'bg-result-1' : gameResult === 2 ? 'bg-result-2' : 'bg-result-3',
      )}>
      <p className="max-w-[320px] p-text mb-auto">{resultTexts[gameResult - 1].text}</p>

      <ShareBlock shareResult={shareResult} />
      <div className='w-[170px]'>
      <Button onClick={handleNavigate}>{resultTexts[gameResult - 1].button}</Button></div>
    </div>
  );
};
