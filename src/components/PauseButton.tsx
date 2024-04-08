import pause from '../assets/images/buttons/pause.svg';
import { useSound } from '../hooks/useSound';
import clickSound from '../assets/music/click.mp3';

interface IPauseButtonProps {
  onClick: () => void;
}

export const PauseButton = ({ onClick }: IPauseButtonProps) => {
  const [playClickSound] = useSound(clickSound);

  const handleClick = () => {
    playClickSound();
    onClick();
  }; 
  
  return (
    <button
      className="absolute flex top-[20px] right-[20px] cursor-pointer z-20 bg-custom-blue w-[45px] h-[43px] justify-center items-center rounded-[12px] rounded-br-[24px] border border-1 border-black shadow-sound"
      onClick={handleClick}>
      <img src={pause} alt="Пауза" />
    </button>
  );
};
