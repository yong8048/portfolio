import * as S from './styles';
import User from '../../data/user';

const Home = () => {
  return (
    <S.HomeDiv>
      <S.HomeContainer>
        <S.HomeTitle>{User.homepage.title}</S.HomeTitle>
        <S.HomeSubTitle>{User.homepage.subtitle}</S.HomeSubTitle>
        <S.HomeDescription>
          {User.homepage.description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </S.HomeDescription>
        <S.HomeLink to='/profile'>더보기</S.HomeLink>
      </S.HomeContainer>
      <S.HomeImg src='/assets/home.jpg' alt='HomeMainImg' />
    </S.HomeDiv>
  );
};

export default Home;
