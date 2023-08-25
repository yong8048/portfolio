import { styled } from 'styled-components';

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

export const ContactTitle = styled.p`
  width: 150px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const ContactName = styled.h1`
  font-size: 18px;
  font-weight: bold;
  width: 450px;

  margin: 50px auto 80px auto;
`;

export const ContactText = styled.p`
  font-size: 16px;
  margin-left: 25px;
  margin-bottom: 10px;
`;

export const ContactLine = styled.p`
  width: 450px;
  border: 1px solid #f11;
  margin: 30px auto;
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
