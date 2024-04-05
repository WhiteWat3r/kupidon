import classNames from 'classnames';
import { useState } from 'react';
import StepButton from '../components/StepButton';
import { setCurrentScreen } from '../store/gameSlice';
import { SCREENS } from '../types/screens';
import { useAppDispatch } from '../store/store';

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
      className={classNames(
        'relative flex flex-col h-full box-border bg-center bg-cover justify-end pb-[26px] items-center bg-no-repeat',
        step === 1 && 'bg-comics-angel-1',
        step === 2 && 'bg-comics-angel-2',
        step === 3 && 'bg-comics-angel-3',
      )}
    
      >
      {step === 2 ? (
        <p className='absolute top-[76px] p-text max-w-[250px]'>Кажется, мне снова придётся поработать</p>
      ) : step === 3 ? (
        <p className='absolute top-[112px] p-text '>Во имя любви!</p>
      ) : (
        ''
      )}

      <div className="flex justify-between px-[20px] w-full">
        {step > 1 && <StepButton onClick={handlePrevClick} mode={'prev'} />}
        <StepButton onClick={handleNextClick} mode={'next'} />
      </div>
    </div>
  );
};
