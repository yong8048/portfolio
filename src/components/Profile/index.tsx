import {
  ProfileContainer,
  ProfileH1,
  ProfileH2,
  ProfileHistory,
  ProfileLeftSection,
  ProfileLogo,
  ProfileP,
  ProfileRightSection,
  ProfileSkills,
  ProfileSubtitle
} from './styles';

import User from '../../data/user';

const Profile = () => {
  return (
    <>
      <ProfileContainer>
        <ProfileLeftSection>
          <ProfileLogo>
            <img src='' alt='ProfileLogo' />
          </ProfileLogo>
          <ProfileSubtitle>
            <ProfileH1>안녕하세여~</ProfileH1>
          </ProfileSubtitle>
        </ProfileLeftSection>
        <ProfileRightSection>
          <div>
            <div>실패는 성공의 어머니</div>
            <ProfileHistory>
              <ProfileH2>History</ProfileH2>
              <ProfileP>2014 시온고등학교 졸업</ProfileP>
              <ProfileP>2017 숭실대학교 주최 IT전문과정 수료(C)</ProfileP>
              <ProfileP>2019 KISE 청년취업아카데미 수료</ProfileP>
              <ProfileP>2020 호서대학교 정보통신공학과 졸업</ProfileP>
              <ProfileP>2020 숭실대학교 주최 IT전문과정 수료(C++)</ProfileP>
              <ProfileP>2020 모블교육센터 SW개발과정 수료</ProfileP>
              <ProfileP>2021 MVTech 비전제어팀 재직</ProfileP>
              <ProfileP>2023 패스트캠퍼스 수료</ProfileP>
            </ProfileHistory>
          </div>
          <ProfileSkills>
            <ProfileH2>Skills</ProfileH2>
            <div>
              <img
                src='{User.skillImg}'
                alt='dkd
              '
              />
            </div>
          </ProfileSkills>
        </ProfileRightSection>
      </ProfileContainer>
    </>
  );
};

export default Profile;
