import * as S from './styles';
import User from '../../data/user';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <S.ProfileContainer>
        <S.ProfileLeftSection animate={animate}>
          <S.ProfileLogo src='/assets/profile.jpg' alt='ProfileLogo' />
          <S.ProfileH3>제 열정과 원칙을 바탕으로</S.ProfileH3>
          <S.ProfileH3>회사의 목표 달성과 성장에 기여하겠습니다.</S.ProfileH3>
          <S.ProfileH4>실패할 때 좌절하기 보다는</S.ProfileH4>
          <S.ProfileH4>배울 점을 찾으려 노력합니다.</S.ProfileH4>
          <S.ProfileH4>모르는게 있다면</S.ProfileH4>
          <S.ProfileH4>이해하기 위해 끝까지 노력합니다.</S.ProfileH4>
          <S.ProfileH4>"한번에" 보다 "꾸준히"를 좋아합니다.</S.ProfileH4>
        </S.ProfileLeftSection>
        <S.ProfileRightSection animate={animate}>
          <S.ProfileH2>이승용 </S.ProfileH2>
          <S.ProfileP>LEE SEUNGYONG</S.ProfileP>

          <S.ProfileSubtitle>
            <div>
              <S.ProfileH2>나이</S.ProfileH2>
              <S.ProfileP>1995.06.18</S.ProfileP>
            </div>
            <div>
              <S.ProfileH2>주소</S.ProfileH2>
              <S.ProfileP>경기도 성남시</S.ProfileP>
            </div>
            <div>
              <S.ProfileH2>E-mail</S.ProfileH2>
              <S.ProfileP>sylee8048@gmail.com</S.ProfileP>
            </div>
          </S.ProfileSubtitle>

          <S.ProfileHistory>
            <S.ProfileH2>History</S.ProfileH2>
            {User.historyList.map((list, index) => (
              <S.ProfileP key={index}>{list}</S.ProfileP>
            ))}
          </S.ProfileHistory>

          <S.ProfileSkills>
            <S.ProfileH2>Front End Skills</S.ProfileH2>
            <div>
              {User.skillImg.map((imgSrc, index) => (
                <S.ProfileSkillsImg key={index} src={imgSrc} alt={`Skill ${index}`} />
              ))}
            </div>
          </S.ProfileSkills>
        </S.ProfileRightSection>
      </S.ProfileContainer>
    </>
  );
};

export default Profile;
