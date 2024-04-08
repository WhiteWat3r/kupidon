import { useAppSelector } from '../store/store';

import clickSound from "../assets/music/click.mp3"

interface IButtonProps {
  children: string;
  onClick: () => void;
  isDisabled?: boolean;
  type?: 'primary' | 'secondary'; // primary не передаю, он по умолчанию
}
export const Button = ({ children, onClick, isDisabled, type }: IButtonProps) => {
  const isSoundOn = useAppSelector((store) => store.game.isSoundOn);

  const handleClick = () => {
    const audio = new Audio(clickSound);
    isSoundOn && audio.play(); // звук клика звучит только в случае включенного звука
    onClick();
  }; // обработчик клика по кнопке

  return (
    <button
      className={`w-full h-[56px] text-[34px] cursor-pointer relative box-border rounded-br-[24px] rounded-bl-[12px] rounded-t-[12px]  p-0 whitespace-nowrap border border-black bg-custom-pink button-text shadow-btn-shadow disabled:opacity-30 ${
        type === 'secondary' && '!bg-custom-gray2'
      }`}
      onClick={handleClick}
      disabled={isDisabled}>
      {children}
    </button>
  );
};

// before:content-"" before:absolute before:w-full before:box-border before:top-[-12%] before:border-[4px] before:border-red-default before:border-transparent before:border-b-red-default before:left-0
