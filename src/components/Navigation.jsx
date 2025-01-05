import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex flex-col justify-around items-center font-bold text-black text-4xl gap-7 md:flex-row md:gap-0 md:text-lg">
      <NavLink className="p-[15px]" to="/">
        Головна
      </NavLink>
      <NavLink className="p-[15px]" to="/catalog">
        Каталог
      </NavLink>
      <NavLink className="p-[15px]" to="/about">
        Про мене
      </NavLink>
    </nav>
  );
};

export default Navigation;
