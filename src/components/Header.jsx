// import { useScreenWidth } from '../hooks/useScreenWidth';

import Button from './Button';
import Container from './Container';

const Header = () => {
  // const { isMobile } = useScreenWidth();

  return (
    <header className=" ">
      <section>
        <Container>
          <div className="flex items-center justify-between w-[1080px]">
            <Button text={'CA'} to={'#123'} />
            <Button text={'ACADEMY'} to={'#123'} />
          </div>
        </Container>
      </section>
    </header>
  );
};

export default Header;
