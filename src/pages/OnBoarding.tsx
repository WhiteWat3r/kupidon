import { useState } from 'react';
import classNames from 'classnames';

import { Button } from '../components/Button';
import angelImg from '../assets/images/angel/angel-1.svg';
import profile1 from '../assets/images/profiles/profile1.png';
import hand from '../assets/images/hands/hand.svg';

import { useAppDispatch } from '../store/store';
import { setCurrentScreen } from '../store/gameSlice';
import { SCREENS } from '../types/screens';
import StepButton from '../components/StepButton';
import { Timer } from '../components/Timer';

const screensInfo = [
  {
    text:
      <p className={`p-text mt-[30px] max-w-[300px]`}>
        Сегодня ты – купидон!  Твоя задача: создать как можно больше пар.
      </p>
    ,
    content: (
      <img
        className="absolute bottom-[7%] h-[360px] w-full object-none"
        src={angelImg}
        alt="Ангел"
      />
    ),
  },
  {
    text:
      <p className={`p-text mt-[30px] max-w-[300px]`}>
        Внимательно изучи анкету человека и найди подходящую для него пару на карте.
      </p>,
    content: <img className="w-full px-[9px] mt-[34px] mb-auto" src={profile1} alt="Анкета" />,
  },
  {
    text:
      <p className={`p-text mt-[30px] max-w-[300px]`}>
        Перемещайся по карте и кликай на человека, чтобы выпустить стрелу любви.
      </p>,
    content: <img className="absolute bottom-[10%] animate-handMove" src={hand} alt="Рука" />,
  },
  {
    text:
      <p className={`p-text mt-[110px] max-w-[300px]`}>
        У Купидона скоро закончится рабочий день  —  следи за временем
      </p>,

    content:
      <div className="absolute top-[130px] w-[156px]">
        <Timer time={150} />
      </div>,
  },
];

export const OnBoarding = () => {
  const [step, setStep] = useState(1);
  const dispatch = useAppDispatch();

  const handleNextClick = () => {
    step < 4 ? setStep(step + 1) : dispatch(setCurrentScreen(SCREENS.THE_GAME));
  };

  const handlePrevClick = () => {
    step > 1 ? setStep(step - 1) : dispatch(setCurrentScreen(SCREENS.THE_COMICS));
  };

  return (
    <div
      className={classNames(
        'bg-main-full-bg h-full bg-no-repeat bg-center bg-cover',
        step === 3 && 'animate-screenMove',
        step === 4 && '!bg-[60%]',
      )}>
      <div className=" flex flex-col h-full box-border  justify-between pb-[26px] pt-[112px] items-center bg-gradient-to-b from-gradient-color">

        {screensInfo[step - 1].text}


        {screensInfo[step - 1].content}

        <div className="relative flex justify-between px-[20px] w-full">
          <StepButton onClick={handlePrevClick} mode={'prev'} />

          {step < 4 ? (
            <StepButton onClick={handleNextClick} mode={'next'} />
          ) : (
            <div className="absolute bottom-0 w-[170px] left-[50%] translate-x-[-50%]">
              <Button onClick={handleNextClick}>Начать</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
