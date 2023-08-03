import {
  ProfileBg,
  ProfileContent,
  ProfileContentTitle,
  ProfileContentDescription,
  ProfileContentDate,
  ProfileContentMain
} from './styles';

const Profile = () => {
  return (
    <>
      <ProfileBg>
        <ProfileContent>
          <ProfileContentDate>
            <p>2022.01 - 2022.03</p>
          </ProfileContentDate>
          <ProfileContentMain>
            <ProfileContentTitle>호서대학교 졸업</ProfileContentTitle>
            <ProfileContentDescription>정보통신공학과 전공</ProfileContentDescription>
          </ProfileContentMain>
        </ProfileContent>
        <ProfileContent>
          <ProfileContentDate>
            <p>2022.01 - 2022.03</p>
          </ProfileContentDate>
          <ProfileContentMain>
            <ProfileContentTitle>호서대학교 졸업</ProfileContentTitle>
            <ProfileContentDescription>정보통신공학과 전공</ProfileContentDescription>
          </ProfileContentMain>
        </ProfileContent>
        <ProfileContent>
          <ProfileContentDate>
            <p>2022.01 - 2022.03</p>
          </ProfileContentDate>
          <ProfileContentMain>
            <ProfileContentTitle>엠브이텍 재직</ProfileContentTitle>
            <ProfileContentDescription>비젼팀 카메라 관련 이미지 검사 프로그램 개발</ProfileContentDescription>
          </ProfileContentMain>
        </ProfileContent>
      </ProfileBg>
    </>
  );
};

export default Profile;
