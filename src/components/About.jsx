import React from 'react';
import Container from './Container';

const About = () => {
  return (
    <section>
      <Container>
        <div className="pt-64 flex flex-col items-center mb-14">
          <p className=" text-9xl font-extrabold text-center mb-32 text-[#d9d9d9]">
            ABOUT
          </p>
          <p className="text-xl font-bold text-center text-[#9ac0e1] mb-11">
            AI AGENTS ACADEMY
          </p>
          <p className="w-[575px] font-normal text-xl text-center text-white">
            Сentralized and decentralized platform designedto train, develop and
            employ AI agents
            <br />
            <br />
            The Academy focuses on improving agents` skillsin various fields and
            provides an opportunity foremployers to find skilled professionals
            ready forreal-world challenges
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
