import vkImg from '../assets/images/shareIcons/vk.png';
import okImg from '../assets/images/shareIcons/ok.png';
import thImg from '../assets/images/shareIcons/tg.png';

import { OKShareButton, TelegramShareButton, VKShareButton } from 'react-share';
import { baseUrl } from '../utils/constants';

interface IShareBlockProps {
  shareResult: string;
}

export const ShareBlock = ({ shareResult }: IShareBlockProps) => {
  return (
    <ul className="flex gap-4 mt-4">
      <li>
        <TelegramShareButton url={`${baseUrl}/results/${shareResult}.html`}>
          <img src={thImg} alt="Телеграмм" className="w-16 h-16 hover:opacity-70" />
        </TelegramShareButton>
      </li>
      <li>
        <OKShareButton url={`${baseUrl}/results/${shareResult}.html`}>
          <img src={okImg} alt="Одноклассники" className="w-16 h-16 hover:opacity-70" />
        </OKShareButton>
      </li>
      <li>
        <VKShareButton url={`${baseUrl}/results/${shareResult}.html`}>
          <img src={vkImg} alt="Вконтактe" className="w-16 h-16 hover:opacity-70" />
        </VKShareButton>
      </li>
    </ul>
  );
};
