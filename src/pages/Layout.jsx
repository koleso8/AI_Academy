import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center w-screen bg-[var(--background-main)] lg:pt-[40px] lg:pb-[120px] bg-bg-pattern bg-repeat bg-center">
      <Toaster position="top-center" />
      <Header />
      <main className="min-h-screen w-full  max-w-[375px]  lg:max-w-[1280px] ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
