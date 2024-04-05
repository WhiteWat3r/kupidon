import { useState, useEffect } from 'react';

import heart from '../assets/images/hearts/heart.png';
import brokenHeart from '../assets/images/hearts/brokenHeart.png';

interface IHeartsProps {
  lvlStatus: number;
  isPaused: boolean;
}

export const Hearts = ({ lvlStatus, isPaused }: IHeartsProps) => {
  const [hearts, setHearts] = useState<{ xPos: number; active: boolean; src: string }[]>([]);

  useEffect(() => {
    const spawnHeart = () => {
      const xPos = Math.random() * 95; // генерация случайной позиции
      setHearts((prevHearts) => [
        ...prevHearts,
        { xPos, active: true, src: lvlStatus === 2 ? heart : brokenHeart },
      ]);

      setTimeout(() => {
        setHearts((prevHearts) =>
          prevHearts.map((heart) => (heart.xPos === xPos ? { ...heart, active: false } : heart)),
        );
      }, 3000); // время анимации сердечка
    };
    if (lvlStatus > 1) {
      const intervalId = setInterval(spawnHeart, 40); // таймер создания сердечка
      return () => clearInterval(intervalId);
    }
  }, [lvlStatus]);

  return (
    <div
      className={`absolute bottom-[120px] h-[200px] w-[363px] overflow-hidden pointer-events-none px-[7px] left-[50%] translate-x-[-50%]  ${
        isPaused ? 'opacity-0' : ''
      }`}>
      {hearts.map(({ xPos, active, src }, index) =>
        active ? (
          <img
            src={src}
            key={index}
            className="absolute animate-fly-heart w-[25px]"
            style={{ left: xPos + '%', bottom: '-20px' }}
            onAnimationEnd={() =>
              setHearts((prevHearts) =>
                prevHearts.map((heart) =>
                  heart.xPos === xPos ? { ...heart, active: false } : heart,
                ),
              )
            }></img>
        ) : null,
      )}
    </div>
  );
};
