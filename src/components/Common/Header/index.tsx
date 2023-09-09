import { Link, useLocation } from 'react-router-dom';
import * as S from './styles';

const Header = () => {
  const location = useLocation();
  console.log(location);

  return (
    <S.HeaderDiv>
      <Link to='/'>
        <img src='/assets/logo.png' alt='logo' width={'50px'} />
      </Link>
      <S.HeaderNav>
        <S.HeaderUl>
          <S.HeaderLi>
            <Link to='/'>Home</Link>
          </S.HeaderLi>
          <S.HeaderLi>
            <Link to='/profile'>Profile</Link>
          </S.HeaderLi>
          <S.HeaderLi>
            <Link to='/work'>Work</Link>
          </S.HeaderLi>
          <S.HeaderLi>
            <Link to='/contact'>Contact</Link>
          </S.HeaderLi>
        </S.HeaderUl>
        <S.HeaderLine pathname={location.pathname} />
      </S.HeaderNav>
    </S.HeaderDiv>
  );
};

export default Header;
