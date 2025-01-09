import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Button = ({ text, link }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <a
      href={link}
      className="min-w-16 py-2.5 px-5  text-[var(--button-text)] rounded-[5px]  buttonHover"
      data-aos-anchor-placement="top-bottom"
    >
      {text}
    </a>
  );
};

export default Button;
