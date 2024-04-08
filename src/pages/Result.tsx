import { Button } from '../components/Button';

import { resultTexts } from '../utils/constants';
import { useAppDispatch, useAppSelector } from '../store/store';
import { useEffect } from 'react';
import classNames from 'classnames';
import { ShareBlock } from '../components/ShareBlock';
import { SCREENS } from '../types/screens';
import { setCurrentScreen, updateArrows } from '../store/gameSlice';
import finalBad from '../assets/music/finalBad.mp3';
import finalGood from '../assets/music/finalGood.mp3';
import finalBest from '../assets/music/finalBest.mp3';

import { useSound } from '../hooks/useSound';

export const Result = () => {
  const dispatch = useAppDispatch();
  const { gameResult } = useAppSelector((store) => store.game);
  const [playfinishMusic] = useSound(
    gameResult === 1 ? finalBad : gameResult === 2 ? finalGood : finalBest,
  );

  const shareResult = gameResult === 1 ? 'bad' : gameResult === 2 ? 'good' : 'excellent';

  const handleNavigate = () => {
    dispatch(updateArrows());

    dispatch(setCurrentScreen(SCREENS.THE_GAME));
  }; // Навигация к игре

  useEffect(() => {
    playfinishMusic();
  }, []); // звук финиша при попадании на страницу с результатом

  useEffect(() => {
    ym(94707499, 'reachGoal', 'fin37');
  }, []);

  return (
    <div
      className={classNames(
        `flex flex-col items-center h-full bg-cover !bg-[center_bottom_-20px] text-center pt-[84px] pb-[47px] gap-[20px]  
        
        bg-result-${gameResult}`,

        gameResult === 1 ? 'bg-result-1' : gameResult === 2 ? 'bg-result-2' : 'bg-result-3',
      )}>
      <p className="max-w-[320px] p-text mb-auto">{resultTexts[gameResult - 1].text}</p>

      <ShareBlock shareResult={shareResult} />
      <div className="w-[170px]">
        <Button onClick={handleNavigate}>{resultTexts[gameResult - 1].button}</Button>
      </div>
    </div>
  );
};
