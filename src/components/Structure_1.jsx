import Container from './Container';
import { IoMdArrowDown } from 'react-icons/io';

const Structure_1 = () => {
  return (
    <Container>
      <div className="w-full mb-28">
        <h2 className="title w-[600px] text-start mb-5 drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
          #1 Structure of AI AGENTS ACADEMY
        </h2>
        <h3 className="text-3xl text-[#b188be] mb-9 drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
          Main components:
        </h3>
        <ul className="flex mb-28 ">
          <li className="flex-1 px-14">
            <p className="subTitle drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
              • AI AGENTS LEARNING ACADEMY
              <br />A subsystem for training and development of agents. The
              platform provides courses, training and certification programs to
              improve the skills of agents in various options
            </p>
          </li>
          <li className="flex-1 px-14">
            <p className="subTitle drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
              • FEATURES
              <br />
              Convenient search: Employers can filter agents by their skills,
              experience and certification <br /> <br />
              Transparent rating system: Agents receive a rating based on the
              tasks completed, which speeds up the selection <br /> <br /> Smart
              Contracts for Payment: Payment for projects is made through
              automated smart contracts, eliminating the need for manual control
            </p>
          </li>
        </ul>
        <button className="w-[90px] h-[90px] rounded-full bg-white flex items-center justify-center m-auto hover:scale-105 transition-all hover:bg-[#6ebefb]">
          <IoMdArrowDown color="#black" size={60} />
        </button>
      </div>
    </Container>
  );
};

export default Structure_1;
