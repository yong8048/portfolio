import { Link } from 'react-router-dom';
import {
  ContactContainer,
  ContactContent,
  ContactGithub,
  ContactLine,
  ContactName,
  ContactText,
  ContactTitle,
  ContactInfo,
  ContactTextDiv
} from './styles';

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <ContactContent>
          <ContactTitle>프론트엔드 개발자</ContactTitle>
          <ContactLine></ContactLine>
          <ContactName>이승용</ContactName>
          <ContactInfo>
            <ContactTextDiv>
              <ContactText>P: 010-3176-8048</ContactText>
              <ContactText>M: sylee8048@gmail.com</ContactText>
            </ContactTextDiv>
            <ContactGithub>
              <Link to='https://github.com/yong8048'>
                <img src='/assets/github.png' alt='깃허브' width='50px' />
              </Link>
            </ContactGithub>
          </ContactInfo>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;
