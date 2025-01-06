// import { useScreenWidth } from '../hooks/useScreenWidth';

import Button from './Button';
import Container from './Container';

const Header = () => {
  // const { isMobile } = useScreenWidth();

  return (
    <header className=" ">
      <section className="pt-4 md:pt-0">
        <Container>
          <div className="flex items-center justify-between w-full relative z-10">
            <Button text={'CA'} to={'#123'} />
            <Button text={'ACADEMY'} to={'#123'} />
          </div>
        </Container>
      </section>
    </header>
  );
};

export default Header;
