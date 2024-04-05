import triangle from '../assets/images/buttons/triangle.svg';
import classNames from 'classnames';

interface IStepButton {
  onClick: () => void;
  mode: 'next' | 'prev';
}

const StepButton = ({ onClick, mode }: IStepButton) => {
  return (
    <button
      className={classNames(
        'w-[56px] h-[56px] bg-custom-blue flex justify-center items-center border border-black rounded-br-[24px] rounded-bl-[12px] rounded-t-[12px] relative z-10',
        mode === 'next'
          ? 'ml-auto shadow-btn-shadow'
          : 'transform scale-x-[-1] shadow-btn2-shadow',
      )}
      onClick={onClick}>
      <img src={triangle} alt={'Вперед'} />
    </button>
  );
};

export default StepButton;
