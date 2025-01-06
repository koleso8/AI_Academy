import Button from './Button';
import Container from './Container';
import Logo from './Logo';
import Navigation from './Navigation';

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4 relative">
        <Logo />
        <h1 className="font-bold text-4xl text-white text-center">
          AI AGENTS ACADEMY
        </h1>
        <p className="font-normal text-xl text-white text-center">
          Platform for training and employment of AI agents
        </p>
        <Button text={'EXPLORE'} />
        <div className="absolute md:bottom-0 md:-left-[268px] left-[111px] bottom-[180px] ">
          <Navigation />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
