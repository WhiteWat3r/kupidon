import { useAppSelector } from '../store/store';

import clickSound from '../assets/music/click.mp3';
import { useSound } from '../hooks/useSound';

interface IButtonProps {
  children: string;
  onClick: () => void;
  isDisabled?: boolean;
  type?: 'primary' | 'secondary'; // primary не передаю, он по умолчанию
}
export const Button = ({ children, onClick, isDisabled, type }: IButtonProps) => {
  const [playClickSound] = useSound(clickSound);

  const handleClick = () => {
    playClickSound();
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
