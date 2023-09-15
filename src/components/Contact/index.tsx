import { useState, useEffect, useRef } from 'react';
import User from '../../data/user';
import * as S from './styles';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  const copyRef = useRef<HTMLDivElement>(null);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const copy = async (text: string, name: string) => {
    await window.navigator.clipboard.writeText(text);

    if (!copyRef.current) return;
    copyRef.current.textContent = `${name}가 복사되었습니다.`;

    setShowCopyMessage(true);

    setTimeout(() => {
      setShowCopyMessage(false);
    }, 1500);
  };

  const MessageHidden = {
    hidden: { bottom: 80, opacity: 0 },
    visible: { bottom: -45, opacity: 0 }
  };

  const MessageShow = {
    hidden: { bottom: -45, opacity: 0 },
    visible: { bottom: 80, opacity: 1 }
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <S.ContactContainer>
      <S.ContactContent animate={animate}>
        <S.ContactTitle animate={animate}>프론트엔드 개발자</S.ContactTitle>
        <S.ContactLine animate={animate} />
        <S.ContactName animate={animate}>{User.main.name}</S.ContactName>
        <S.ContactName animate={animate}>Lee SeungYong</S.ContactName>
        <S.ContactInfo>
          <S.ContactTextDiv>
            <S.ContactText animate={animate} onClick={() => copy(User.main.phone, '연락처')}>
              P: {User.main.phone}
            </S.ContactText>
            <S.ContactText animate={animate} onClick={() => copy(User.main.email, '이메일')}>
              M: {User.main.email}
            </S.ContactText>
            <S.ContactText animate={animate}>B: 1995.06.18</S.ContactText>
          </S.ContactTextDiv>
          <S.ContactGithub>
            <Link to={User.main.link} target='_blank'>
              <S.ContactImg animate={animate} src='/assets/github.png' alt='github_link' />
            </Link>
          </S.ContactGithub>
        </S.ContactInfo>
      </S.ContactContent>
      <S.ContactCopyMessage
        ref={copyRef}
        variants={showCopyMessage ? MessageShow : MessageHidden}
        initial='hidden'
        animate='visible'
      ></S.ContactCopyMessage>
    </S.ContactContainer>
  );
};

export default Contact;
