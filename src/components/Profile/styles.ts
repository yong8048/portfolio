import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
export const ProfileLeftSection = styled.div<{ animate: boolean }>`
  width: 500px;
  opacity: ${(props) => (props.animate ? 1 : 0)};
  transition: all 0.7s ease-in-out;
`;
export const ProfileRightSection = styled.div<{ animate: boolean }>`
  * {
    opacity: ${(props) => (props.animate ? 1 : 0)};
    transform: ${(props) => (props.animate ? 'translateZ(0)' : ' translate3d(100%, 0, 0)')};
    transition: all 0.7s ease-in-out;
    transition-delay: 0.7s;
  }
  width: 500px;
`;
export const ProfileLogo = styled.img`
  width: 150px;
  height: 192px;
  margin: 100px 0 20px 0;
`;
export const ProfileHistory = styled.div`
  margin-top: 50px;

  p {
    font-size: 16px;
  }
`;
export const ProfileSubtitle = styled.div`
  display: flex;

  gap: 100px;
`;
export const ProfileH1 = styled.h1`
  font-weight: bold;
`;
export const ProfileH2 = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
`;
export const ProfileH3 = styled.p`
  width: 400px;
  font-size: 20px;
  margin-top: 10px;
`;
export const ProfileH4 = styled.p`
  width: 300px;
  font-size: 16px;
  margin-top: 10px;
  color: #999;
`;
export const ProfileP = styled.p`
  font-size: 13px;
  margin-top: 8px;
`;
export const ProfileSkills = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const ProfileSkillsImg = styled.img`
  margin: 8px;
`;
