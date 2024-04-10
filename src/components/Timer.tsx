interface ITimerProps {
  time: number;
}

export const Timer = ({ time }: ITimerProps) => {

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Add leading zero if seconds are less than 10
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div
      className={`absolute top-[15px] left-[50%] translate-x-[-50%] flex items-center justify-center timer-text h-[60]`}>
      {`0${minutes}:${formattedSeconds}`}    </div>
  );
};
