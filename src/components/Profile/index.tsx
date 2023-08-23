import * as S from './styles';

import User from '../../data/user';

const Profile = () => {
  return (
    <>
      <S.ProfileContainer>
        <S.ProfileLeftSection>
          <S.ProfileLogo>
            <img src='/assets/bulb.jpg' alt='ProfileLogo' width={'400px'} />
          </S.ProfileLogo>
          <S.ProfileSubtitle>
            <div>
              <S.ProfileH2>나이</S.ProfileH2>
              <S.ProfileP>1995.06.18</S.ProfileP>
            </div>
            <div>
              <S.ProfileH2>E-mail</S.ProfileH2>
              <S.ProfileP>sylee8048@gmail.com</S.ProfileP>
            </div>
          </S.ProfileSubtitle>
        </S.ProfileLeftSection>
        <S.ProfileRightSection>
          <div>
            <S.ProfileH1>한마디 적어볼게~</S.ProfileH1>
            <S.ProfileHistory>
              <S.ProfileH2>History</S.ProfileH2>
              <S.ProfileP>2014 시온고등학교 졸업</S.ProfileP>
              <S.ProfileP>2017 숭실대학교 주최 IT전문과정 수료(C)</S.ProfileP>
              <S.ProfileP>2019 KISE 청년취업아카데미 수료</S.ProfileP>
              <S.ProfileP>2020 호서대학교 정보통신공학과 졸업</S.ProfileP>
              <S.ProfileP>2020 숭실대학교 주최 IT전문과정 수료(C++)</S.ProfileP>
              <S.ProfileP>2020 모블교육센터 SW개발과정 수료</S.ProfileP>
              <S.ProfileP>2021 MVTech 비전제어팀 재직</S.ProfileP>
              <S.ProfileP>2023 패스트캠퍼스 프론트엔드과정 수료</S.ProfileP>
            </S.ProfileHistory>
          </div>
          <S.ProfileSkills>
            <S.ProfileH2>Skills</S.ProfileH2>
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
