import Contact from '../../components/Contact';
import Home from '../../components/Home';
import Profile from '../../components/Profile';
import Work from '../../components/Work';
import { HomePageMain } from './styles';

const HomePage = () => {
  return (
    <HomePageMain>
      <Home />
      <Profile />
      <Work />
      <Contact />
    </HomePageMain>
  );
};

export default HomePage;
