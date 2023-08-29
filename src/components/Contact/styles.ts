import { keyframes, styled } from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

export const ContactContent = styled.div`
  width: 500px;
  height: 300px;
  background-color: #222;
  border-radius: 5px;

  start: {
    scale: 0;
  }

  end: {
    scale: 1;
    rotatez: 360;
  }
`;

export const ContactTitle = styled.p<{ animate: boolean }>`
  width: 150px;
  margin: 0 auto;
  margin-top: 30px;
  color: ${(props) => (props.animate ? '#fff' : '#222')};
  transition: all 0.9s ease-in-out;
`;

export const ContactName = styled.h1<{ animate: boolean }>`
  font-size: 18px;
  font-weight: bold;
  width: 450px;
  color: ${(props) => (props.animate ? '#fff' : '#222')};
  transition: all 0.9s ease-in-out;
  margin: 50px auto 80px auto;
`;

export const ContactText = styled.p<{ animate: boolean }>`
  font-size: 16px;
  margin-left: 25px;
  margin-bottom: 10px;
  color: ${(props) => (props.animate ? '#fff' : '#222')};
  transition: all 0.9s ease-in-out;
`;

export const ContactLine = styled.p<{ animate: boolean }>`
  width: ${(props) => (props.animate ? '450px' : '1px')};
  border: 1px solid #f11;
  margin: 30px auto;
  transition: width 0.9s ease-in-out;
`;

export const ContactInfo = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-between;
`;
export const ContactGithub = styled.div`
  width: 50px;
`;
export const ContactTextDiv = styled.div`
  width: 400px;
`;
export const ContactImg = styled.img<{ animate: boolean }>`
  width: 50px;
  opacity: ${(props) => (props.animate ? 1 : 0)};
  transition: opacity 0.9s ease-in-out;
`;
