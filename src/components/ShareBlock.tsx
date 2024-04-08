import vkImg from '../assets/images/shareIcons/vk.png';
import okImg from '../assets/images/shareIcons/ok.png';
import thImg from '../assets/images/shareIcons/tg.png';

import { baseUrl } from '../utils/constants';

interface IShareBlockProps {
  shareResult: string;
  onClick?: () => void;
}

export const ShareBlock = ({ shareResult, onClick }: IShareBlockProps) => {
  return (
    <ul className="flex gap-4 mt-4">
      <li>
        <a
          onClick={onClick}
          href={`https://telegram.me/share/url?url=${baseUrl}results/${shareResult}.html`}
          target="blank">
          <img src={thImg} alt="Телеграмм" className="w-16 h-16 hover:opacity-70" />
        </a>
      </li>
      <li>
        <a
          onClick={onClick}
          href={`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${baseUrl}results/${shareResult}.html`}
          target="blank">
          <img src={okImg} alt="Одноклассники" className="w-16 h-16 hover:opacity-70" />
        </a>
      </li>
      <li>
        <a
          onClick={onClick}
          href={`https://vk.com/share.php?url=${baseUrl}results/${shareResult}.html`}
          target="blank">
          <img src={vkImg} alt="Вконтактe" className="w-16 h-16 hover:opacity-70" />
        </a>
      </li>
    </ul>
  );
};
