import Header from 'components/molecules/Header/Header';
import Section from 'components/organisms/Section/Section';
import Footer from 'components/molecules/Footer/Footer';
import { useMeals } from 'hooks/useMeals';
import { Navigate } from 'react-router-dom';

const LandingPage = () => {
  const dietInfo = useMeals(); // main information about diet

  if (dietInfo) return <Navigate to="/dashboard" />;

  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
};

export default LandingPage;
