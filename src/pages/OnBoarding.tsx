import { useState } from 'react';
import classNames from 'classnames';

import { Button } from '../components/Button';
import angelImg from '../assets/images/angel/angel-1.svg';
import profile1 from '../assets/images/profiles/profile1.png';
import hand from '../assets/images/hands/hand.svg';
import arrows from '../assets/images/arrows/arrows.png';

import { useAppDispatch } from '../store/store';
import { setCurrentScreen } from '../store/gameSlice';
import { SCREENS } from '../types/screens';
import StepButton from '../components/StepButton';

const screensInfo = [
  {
    text: 'Сегодня ты – купидон!  Твоя задача: создать как можно больше пар.',
    content: (
      <img
        className="absolute bottom-[7%] h-[360px] w-full object-none"
        src={angelImg}
        alt="Ангел"
      />
    ),
  },
  {
    text: 'Внимательно изучи анкету человека и найди подходящую для него пару на карте.',
    content: <img className="w-full px-[9px] mt-[34px] mb-auto" src={profile1} alt="Анкета" />,
  },
  {
    text: 'Перемещайся по карте и кликай на человека, чтобы выпустить стрелу любви.',
    content: <img className="absolute bottom-[10%] animate-handMove" src={hand} alt="Рука" />,
  },
  {
    text: 'Если человек выбран правильно, пара совпадёт. Если нет, ищи дальше! У тебя есть 5 попыток. ',
    content: <img className="absolute top-[120px] w-[156px]" src={arrows} alt="Стрелы" />,
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
        <p className={`p-text mt-[30px] max-w-[306px] ${step === 4 && 'mt-[80px]'}`}>
          {screensInfo[step - 1].text}
        </p>

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
