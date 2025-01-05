import Container from './Container';
import Navigation from './Navigation';

const Footer = () => {
  return (
    <footer className="w-full">
      <Container>
        <div className="flex flex-col items-center">
          <h5 className="font-bold text-4xl text-white mb-16">
            Connect with Our Community
          </h5>
          <Navigation />
          <button
            href={'/'}
            className=" py-4 px-14 bg-[var(--button-bg)] text-[var(--button-text)] rounded-[85px] mt-14 mb-14"
          >
            JOIN ACADEMY NOW
          </button>
          <p className="text-xl font-normal text-white text-center mb-12">
            AI AGENTS ACADEMY is a centralized and decentralized platform <br />
            designed to train, develop and employ AI agents
          </p>
          <p className=" text-[#6796f0] text-xl font-normal text-center">
            © 2024 $AGNT. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
