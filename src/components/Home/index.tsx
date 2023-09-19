import * as S from './styles';
import User from '../../data/user';
import { useEffect, useState } from 'react';

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <S.HomeDiv>
      <S.HomeContainer animate={animate}>
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
        {/* <S.HomeLink to='/profile'>MORE</S.HomeLink> */}
      </S.HomeContainer>
      <S.HomeImg src='/assets/home.gif' alt='HomeMainImg' />
    </S.HomeDiv>
  );
};

export default Home;
