import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center w-screen bg-[var(--background-main)] lg:pt-[40px] lg:pb-[120px] bg-bg-pattern bg-repeat bg-center relative">
      <Toaster position="top-center" />
      <Header />
      <main className="min-h-screen w-full  relative z-10">{children}</main>
      <Footer />
      <div className="bg"></div>
    </div>
  );
};

export default Layout;
