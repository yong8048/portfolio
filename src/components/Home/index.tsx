import { HomeImg, HomeDiv } from './styles';

const Home = () => {
  return (
    <HomeDiv>
      <div>
        <h1>한마디~</h1>
        <p>소개~</p>
      </div>
      <HomeImg src='/assets/home.jpg' alt='' />
    </HomeDiv>
  );
};

export default Home;
