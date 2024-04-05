import { setCurrentScreen, setGameResult } from '../store/gameSlice';
import { useAppDispatch } from '../store/store';
import { SCREENS } from '../types/screens';
import { Button } from './Button';

interface IPauseProps {
  setIsPaused: (isPaused: boolean) => void;
}

export const Pause = ({ setIsPaused }: IPauseProps) => {
  const dispatch = useAppDispatch();

  const handleGiveUp = () => {
    dispatch(setGameResult(1));
    dispatch(setCurrentScreen(SCREENS.THE_RESULT));
  };

  const handleContinue = () => {
    setIsPaused(false);
  };

  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <div className="p-[32px] bg-custom-blue rounded-[32px] shadow-pause-sadow border border-black border-1 flex flex-col justify-between gap-[105px] w-[85%]">
        <h1 className="h1-text">Пауза</h1>

        <div className="flex flex-col gap-[12px]">
          <Button onClick={handleGiveUp} type={'secondary'}>Сдаться</Button>
          <Button onClick={handleContinue}>Продолжить</Button>
        </div>
      </div>
    </div>
  );
};
