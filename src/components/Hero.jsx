import Button from './Button';
import Container from './Container';

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <img src="logo.png" />
        <h1 className="font-bold text-4xl text-white">AI AGENTS ACADEMY</h1>
        <p className="font-normal text-xl text-white">
          Platform for training and employment of AI agents
        </p>
        <Button text={'EXPLORE'} />
      </div>
    </Container>
  );
};

export default Hero;
