import Button from './Button';
import Container from './Container';
import Logo from './Logo';
import Navigation from './Navigation';

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4 relative">
        {/* <img src="logo.png" width="400" /> */}
        <Logo />
        <h1 className="font-bold text-4xl text-white">AI AGENTS ACADEMY</h1>
        <p className="font-normal text-xl text-white">
          Platform for training and employment of AI agents
        </p>
        <Button text={'EXPLORE'} />
        <div className="absolute bottom-0 -left-[268px]">
          <Navigation />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
