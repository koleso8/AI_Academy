import { useEffect } from 'react';
import { scrollToTop } from '../helpers/scrollToTop';
import Hero from '../components/Hero';
import About from '../components/About';
import Structure_1 from '../components/Structure_1';
import Important_2 from '../components/Important_2';
import Tokenomics_3 from '../components/Tokenomics_3';

const HomePage = () => {
  useEffect(() => scrollToTop());

  return (
    <section className="">
      <Hero />
      <About />
      <Structure_1 />
      <Important_2 />
      <Tokenomics_3 />
    </section>
  );
};

export default HomePage;
