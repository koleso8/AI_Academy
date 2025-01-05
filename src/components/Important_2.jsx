import Container from './Container';

const Important_2 = () => {
  return (
    <Container>
      <div className="w-full mb-72">
        <h2 className="title w-[840px] text-start mb-44 ">
          #2 Important functions and components
        </h2>
        <ul className="flex flex-col w-full items-center ">
          <li className="w-full">
            <h3 className="impTitle">A</h3>
            <h4 className="impSubTitle">Agent Training and Development</h4>
            <div className="flex gap-9 justify-center ">
              <div className="impCard ">
                <h5 className="pb-5 font-bold text-center">
                  • PERSONALIZED TRAINING
                </h5>
                <p className="cardSub pb-5 text-center">
                  Agents will take courses customized based on their current
                  skills and goals.The training will utilize adaptive learning
                </p>
                <h5 className="pb-5 font-bold text-center w-[360px]">
                  • INTERACTIVE COURSES AND HANDS-ON ASSGNMENTS
                </h5>
                <p className="cardSub  text-center">
                  to improve weaknesses. Courses will range from basic AI skills
                  to complex areas such as machine learning, blockchain
                  development, and data analytics
                </p>
              </div>
              <div className="impCard ">
                <h5 className="pb-5 font-bold text-center">
                  • PROGRESS ASSESSMENTS
                </h5>
                <p className="cardSub pb-5 text-center">
                  The system will track agents` progress, make recommendations
                  for improvement, and refer them to additional courses or
                  hands-on training to develop missing skills.
                </p>
                <h5 className="pb-5 font-bold text-center ">• CERTIFICATION</h5>
                <p className="cardSub  text-center">
                  Upon completion of the courses, agents can earn certificates
                  that will validate their skills and help employers select the
                  right talent
                </p>
              </div>
            </div>
          </li>
          <li className="w-full">
            <h3 className="impTitle">B</h3>
            <h4 className="impSubTitle">
              Integration with local and international labor markets
            </h4>
            <div className="flex gap-9 justify-center ">
              <div className="impCard ">
                <h5 className="pb-5 font-bold text-center">
                  Access to international market:
                </h5>
                <p className="cardSub  text-center">
                  The platform will be open to employers and agents globally,
                  allowing them to find jobs and skilled professionals in any
                  country
                </p>
              </div>
              <div className="impCard ">
                <h5 className="pb-5 font-bold text-center ">
                  Adaptation for different markets:
                </h5>
                <p className="cardSub  text-center">
                  Training and employment models will be adapted according to
                  the region, allowing for legislative and cultural differences
                </p>
              </div>
            </div>
          </li>
          <li className="w-full">
            <h3 className="impTitle">C</h3>
            <h4 className="impSubTitle">Verification and Security</h4>
            <div className="flex gap-9 justify-center ">
              <div className="impCard ">
                <h5 className="pb-5 font-bold text-center">
                  Identity Verification:
                </h5>
                <p className="cardSub  text-center">
                  The platform will use a verification system (e.g. via e-mail,
                  KYC providers orlocal documents) to ensure that all agents are
                  real people with verified credentials
                </p>
              </div>
              <div className="impCard ">
                <h5 className="pb-5 font-bold text-center ">
                  Adaptation for different markets:
                </h5>
                <p className="cardSub  text-center">
                  Training and employment models will be adapted according to
                  the region, allowing for legislative and cultural differences
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Important_2;
