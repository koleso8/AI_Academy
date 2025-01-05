import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Navigation = () => {
  return (
    <nav className="flex gap-2">
      <a
        href="x"
        target="_blank"
        className="flex w-12 h-12 border-2 rounded-full items-center justify-center"
      >
        <FaXTwitter color="#fff" size={30} />
      </a>
      <a
        href="tg"
        target="_blank"
        className="flex w-12 h-12 border-2 rounded-full items-center justify-center"
      >
        <FaTelegramPlane color="#fff" size={30} />
      </a>
    </nav>
  );
};

export default Navigation;
