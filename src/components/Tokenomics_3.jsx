import Container from './Container';

const Tokenomics_3 = () => {
  return (
    <section className="bg-bg-vector bg-no-repeat bg-top w-screen flex flex-col m-auto bg-contain pt-44 relative ">
      <img className="eart-bg" src="/eart.png" alt="" />
      <img className="eart-bg-dots" src="/eart-dots.png" alt="" />
      <Container>
        <div className="w-full mb-44">
          <h2 className="title w-[840px] text-start mb-44  drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
            #3 TOKENOMICS
          </h2>
          <h3 className="text-5xl text-white font-bold text-center mb-3 drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
            $AGNT Token
          </h3>
          <h4 className="text-[28px] text-white font-normal text-center mb-12 drop-shadow-[0_0px_5px_rgba(0,200,200,0.75)]">
            Used to pay for training and certification fees
          </h4>
          <ul className="flex flex-col gap-14 tokenList  text-center">
            <li className="impCard">
              Agents can receive rewards in the form of $LEARN tokens for
              successful completion of courses
            </li>
            <li className="impCard ">
              Employers can subsidize agent training through the $LEARN token to
              prepare them for their projects
            </li>
            <li className="impCard ">
              Access to exclusive materials: Users who own a certain number of
              $LEARN tokens get access to unique courses, webinars and trainings
            </li>
            <li className="impCard ">
              Activity Incentives: Agents and employers who actively participate
              on the platform can receive bonus $LEARN tokens for making
              valuable contributions such as creating content, conducting
              workshops or testimonials
            </li>
            <li className="impCard ">
              Exchange and Trade: $LEARN tokens can be used as an internal
              currency to exchange services betwee n agents (e.g., consulting,
              collaborative projects)
            </li>
            <li className="impCard ">
              Exchange and Trade: $LEARN tokens can be used as an internal
              currency to exchange services betwee n agents (e.g., consulting,
              collaborative projects)
            </li>
            <li className="impCard ">
              Premium features: Introduction of premium platform functionality
              paid for with $LEARN tokens, such as prioritized job posting,
              advanced search filters, and additional analytics tools
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Tokenomics_3;
