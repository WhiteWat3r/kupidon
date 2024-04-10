import { IGuy } from '../types/guys';
import femaleAvatar from '../assets/images/profiles/femaleAvatar.png';
import maleAvatar from '../assets/images/profiles/maleAvatar.png';

import success from '../assets/images/profiles/success.svg';
import failure from '../assets/images/profiles/failure.svg';

// import { correctMatch } from '../utils/correctMath';

interface IProfileProps {
  currentGuy: IGuy;
  lvlStatus: number;
  clickedOnBoardGuy?: IGuy;
}

export const Profile = ({ currentGuy, lvlStatus, clickedOnBoardGuy }: IProfileProps) => {
  return (
    <div
      className={`absolute bottom-[7px] left-[50%] w-[363px] h-[126px]  translate-x-[-50%] rounded-[20px] flex justify-between items-center gap-[4px] border border-1 border-black  shadow-sound ${lvlStatus === 1 ? 'bg-white' : lvlStatus === 2 ? 'bg-custom-pink2' : 'bg-custom-gray'
        }`}>
      <img src={currentGuy.avatar} alt={currentGuy.name} className="h-[107px] ml-[8px]" />

      {lvlStatus === 1 ? (
        <p className="text-[12px] text-center">{currentGuy.profileText}</p>
      ) : (
        <img src={lvlStatus == 2 ? success : failure} alt={'Статус'} />
      )}

      <img
        src={
          !clickedOnBoardGuy
            ? currentGuy.gender === 'male'
              ? femaleAvatar
              : maleAvatar
            : clickedOnBoardGuy?.avatar
        }
        alt={currentGuy?.name}
        className="h-[107px] mr-[8px]"
      />
    </div>
  );
};
