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
              {User.historyList.map((list, index) => (
                <S.ProfileP key={index}>{list}</S.ProfileP>
              ))}
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
