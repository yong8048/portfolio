import { Link } from 'react-router-dom';
import { HeaderUl, HeaderLi, HeaderDiv, HeaderNav } from './styles';

const Header = () => {
  return (
    <HeaderDiv>
      <Link to='/'>
        <img src='/assets/logo.png' alt='logo' width={'50px'} />
      </Link>
      <HeaderNav>
        <HeaderUl>
          <HeaderLi>
            <Link to='/'>Home</Link>
          </HeaderLi>
          <HeaderLi>
            <Link to='/profile'>Profile</Link>
          </HeaderLi>
          <HeaderLi>
            <Link to='/work'>Work</Link>
          </HeaderLi>
          <HeaderLi>
            <Link to='/contact'>Contact</Link>
          </HeaderLi>
        </HeaderUl>
      </HeaderNav>
    </HeaderDiv>
  );
};

export default Header;
