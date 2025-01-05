import { useEffect } from 'react';
import { scrollToTop } from '../helpers/scrollToTop';

const Catalog = () => {
  useEffect(() => scrollToTop());
  return <section>Chat</section>;
};

export default Catalog;
