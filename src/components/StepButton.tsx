import triangle from '../assets/images/buttons/triangle.svg';
import classNames from 'classnames';
import clickSound from "../assets/music/click.mp3"
import { useAppSelector } from '../store/store';

interface IStepButton {
  onClick: () => void;
  mode: 'next' | 'prev';
}

const StepButton = ({ onClick, mode }: IStepButton) => {
  const isSoundOn = useAppSelector((store) => store.game.isSoundOn);

  const handleClick = () => {
    const audio = new Audio(clickSound);
    isSoundOn && audio.play(); // звук клика звучит только в случае включенного звука
    onClick();
  }; // обработчик клика по кнопке


  return (
    <button
      className={classNames(
        'w-[56px] h-[56px] bg-custom-blue flex justify-center items-center border border-black rounded-br-[24px] rounded-bl-[12px] rounded-t-[12px] relative z-10',
        mode === 'next'
          ? 'ml-auto shadow-btn-shadow'
          : 'transform scale-x-[-1] shadow-btn2-shadow',
      )}
      onClick={handleClick}>
      <img src={triangle} alt={'Вперед'} />
    </button>
  );
};

export default StepButton;
