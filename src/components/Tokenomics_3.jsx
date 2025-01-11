import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from './Container';

const Tokenomics_3 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="bg-bg-vector bg-no-repeat bg-top w-screen flex flex-col m-auto bg-contain md:pt-44 pt-0 relative ">
      <img
        className="eart-bg"
        src="/eart.png"
        alt="eart"
        data-aos="zoom-out"
        data-aos-duration="4000"
      />
      <img
        className="eart-bg-dots"
        src="/eart-dots.png"
        alt="eart dots"
        data-aos="zoom-in"
        data-aos-duration="4000"
      />
      <Container>
        <div className="w-full md:mb-44 mb-16 ">
          <h2
            className="title md:w-[840px] md:text-start text-center md:mb-44 mb-16  drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            #3 TOKENOMICS
          </h2>
          <h3
            className="text-5xl text-white font-bold text-center mb-3 drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            $AGNT Token
          </h3>
          <h4
            className="text-[28px] text-white font-normal text-center mb-12 drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            Used to pay for training and certification fees
          </h4>

          <div
            className="flex flex-col items-center md:items-end"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="flex flex-col rounded-xl bg-black border-blue-300 border-[1px] gap-9 px-5 md:px-11 py-6 md:py-12 text-white max-w-[320px] md:max-w-[1000px] w-[800px]   pb-3 text-wrap md:text-nowrap  mb-20 md:text-2xl">
              <div className="flex justify-between md:gap-40 gap-20 ">
                <p>SOL Blockchain</p>
                <p>Supply 1,000,000,000</p>
              </div>
              <div className="flex justify-between md:gap-40">
                <p>LP tokens burned </p>
                <p>Ticker $AGNT</p>
              </div>
              <p>Contract: Soon</p>

              <a
                href={'https://buy'}
                target="_blank"
                className="min-w-16 py-2.5 px-9  text-[var(--button-text)] rounded-[5px]  buttonHover text-center max-w-24 md:max-w-[300px] m-auto"
                data-aos-anchor-placement="top-bottom"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                BUY
              </a>
            </div>
            <ul className="flex flex-col items-center md:items-end md:gap-14 gap-4 tokenList  text-center">
              <li
                className="impCard"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                Agents can receive rewards in the form of $AGNT tokens for
                successful completion of courses
              </li>
              <li className="flex flex-col items-centr gap-4 md:flex-row md:gap-12 p-0">
                <div
                  className="impCard "
                  data-aos="zoom-in"
                  data-aos-duration="600"
                >
                  Employers can subsidize agent training through the $AGNT token
                  to prepare them for their projects
                </div>
                <div
                  className="impCard "
                  data-aos="zoom-in"
                  data-aos-duration="500"
                >
                  Access to exclusive materials: Users who own a certain number
                  of $AGNT tokens get access to unique courses, webinars and
                  trainings
                </div>
              </li>
              <li className="flex flex-col items-centr md:flex-row gap-4 md:gap-12 p-0">
                <div
                  className="impCard "
                  data-aos="zoom-in"
                  data-aos-duration="700"
                >
                  Activity Incentives: Agents and employers who actively
                  participate on the platform can receive bonus $AGNT tokens for
                  making valuable contributions such as creating content,
                  conducting workshops or testimonials
                </div>
                <div
                  className="impCard "
                  data-aos="zoom-in"
                  data-aos-duration="900"
                >
                  Exchange and Trade: $AGNT tokens can be used as an internal
                  currency to exchange services betwee n agents (e.g.,
                  consulting, collaborative projects)
                </div>
                <div
                  className="impCard "
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  Premium features: Introduction of premium platform
                  functionality paid for with $AGNT tokens, such as prioritized
                  job posting, advanced search filters, and additional analytics
                  tools
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tokenomics_3;
