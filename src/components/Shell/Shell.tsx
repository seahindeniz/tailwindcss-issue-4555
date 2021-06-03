import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';

const Shell: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-200">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Shell;
