import { HomeImg, HomeDiv, HomeContainer, HomeTitle, HomeDescription } from './styles';
import User from '../../data/user';
const Home = () => {
  return (
    <HomeDiv>
      <HomeContainer>
        <HomeTitle>{User.homepage.title}</HomeTitle>
        <HomeDescription>{User.homepage.description}</HomeDescription>
      </HomeContainer>
      <HomeImg src='/assets/home.jpg' alt='HomeMainImg' />
    </HomeDiv>
  );
};

export default Home;
