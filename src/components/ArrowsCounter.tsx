import arrow from '../assets/images/arrows/arrow.png';
import crushedArrow from '../assets/images/arrows/crushedArrow.png';

interface IArrowsCounterProps {
  arrowsCount: number;
}

export const ArrowsCounter = ({ arrowsCount }: IArrowsCounterProps) => {
  const arrows = [];
  for (let i = 0; i < arrowsCount; i++) {
    arrows.push(
      <li key={i}>
        <img key={i} src={arrow} alt="Arrow" className="w-[28px]" />
      </li>,
    );
  }
  for (let i = arrowsCount; i < 5; i++) {
    arrows.push(
      <li key={i}>
        <img key={i} src={crushedArrow} alt="Crushed Arrow" className="w-[28px]" />
      </li>,
    );
  }

  return (
    <ul
      className={`absolute top-[20px] left-[50%] translate-x-[-50%] w-[156px] h-[52px] bg-white rounded-[16px]  border border-1 border-black shadow-sound flex items-center justify-center`}>
      {arrows}
    </ul>
  );
};
