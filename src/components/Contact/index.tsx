import { useState, useEffect } from 'react';
import User from '../../data/user';
import * as S from './styles';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <S.ContactContainer>
      <S.ContactContent>
        <S.ContactTitle animate={animate}>프론트엔드 개발자</S.ContactTitle>
        <S.ContactLine animate={animate} />
        <S.ContactName animate={animate}>{User.main.name}</S.ContactName>
        <S.ContactInfo>
          <S.ContactTextDiv>
            <S.ContactText animate={animate}>P: {User.main.phone}</S.ContactText>
            <S.ContactText animate={animate}>M: {User.main.email}</S.ContactText>
          </S.ContactTextDiv>
          <S.ContactGithub>
            <Link to={User.main.link} target='_blank'>
              <S.ContactImg animate={animate} src='/assets/github.png' alt='github_link' />
            </Link>
          </S.ContactGithub>
        </S.ContactInfo>
      </S.ContactContent>
    </S.ContactContainer>
  );
};

export default Contact;
