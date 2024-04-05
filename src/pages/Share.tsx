import { useAppDispatch } from '../store/store';
import { Button } from '../components/Button';
import { setCurrentScreen } from '../store/gameSlice';
import { SCREENS } from '../types/screens';
import { ShareBlock } from '../components/ShareBlock';
import { useEffect, useState } from 'react';

export const Share = () => {
  const dispatch = useAppDispatch();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleNavigate = () => {
    dispatch(setCurrentScreen(SCREENS.THE_RESULT));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 2000);
  });

  return (
    <div className="flex flex-col items-center h-full bg-cover !bg-[center_bottom_-20px] text-center pt-[84px] pb-[47px] gap-[20px] bg-share">
      <h1 className="h1-text mt-auto">Упс!</h1>

      <p className="max-w-[320px] p-text mb-auto">
        У тебя закончились стрелы! Позови на помощь друга, чтобы продолжить. 
      </p>

      <ShareBlock shareResult={'help'} />

<div className='w-[170px]'>
        <Button onClick={handleNavigate} isDisabled={isButtonDisabled}>
        Не хочу
      </Button>
</div>

    </div>
  );
};
