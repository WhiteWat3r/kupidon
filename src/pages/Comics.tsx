import classNames from 'classnames';
import { useState } from 'react';
import StepButton from '../components/StepButton';
import { setCurrentScreen } from '../store/gameSlice';
import { SCREENS } from '../types/screens';
import { useAppDispatch } from '../store/store';

type StepContent = {
  text: React.ReactNode;
  bg: string;
};

const stepsContent: { [key: number]: StepContent } = {
  1: {
    text: (
      <p className="max-w-[332px]">
        Купидон очень хорошо поработал в прошлом году и решил отдохнуть
      </p>
    ),
    bg: 'bg-comics-angel-1'
  },
  2: {
    text: (
      <p className="max-w-[320px]">
        Но не тут-то было! В&nbsp;новом году на него свалилось ещё больше работы!
      </p>
    ),
    bg: 'bg-comics-angel-2'
  },
  3: {
    text: <p className="mt-[40px]">Во имя любви!</p>,
    bg: 'bg-comics-angel-3'
  },
};

export const Comics = () => {
  const [step, setStep] = useState(1);
  const dispatch = useAppDispatch();

  const handleNextClick = () => {
    step < 3 ? setStep(step + 1) : dispatch(setCurrentScreen(SCREENS.THE_ONBOARDING));
  };

  const handlePrevClick = () => {
    setStep(step - 1);
  };
  //   bg-[length:1500px]
  return (
    <div
      className={classNames(`relative flex flex-col h-full box-border bg-center bg-cover justify-end pb-[26px] items-center bg-no-repeat`,  stepsContent[step].bg)}>
      <div className="absolute top-[80px] p-text">{stepsContent[step].text}</div>

      <div className="flex justify-between px-[20px] w-full">
        {step > 1 && <StepButton onClick={handlePrevClick} mode={'prev'} />}
        <StepButton onClick={handleNextClick} mode={'next'} />
      </div>
    </div>
  );
};
