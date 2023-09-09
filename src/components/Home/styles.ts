import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const HomeDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

export const HomeContainer = styled.div<{ animate: boolean }>`
  margin: 25px;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  word-break: keep-all;

  h1 {
    opacity: ${(props) => (props.animate ? 1 : 0)};
    transition: all 1s ease-in-out;
  }

  h2 {
    opacity: ${(props) => (props.animate ? 1 : 0)};
    transition: all 1s ease-in-out;
    transition-delay: 1s;
  }
  h3 {
    opacity: ${(props) => (props.animate ? 1 : 0)};
    transition: all 1s ease-in-out;
    transition-delay: 2s;
  }
  a {
    opacity: ${(props) => (props.animate ? 1 : 0)};
    transition: all 1s ease-in-out;
    transition-delay: 3s;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;
export const HomeSubTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  margin-bottom: 25px;
`;

export const HomeDescription = styled.h3`
  font-size: 20px;
  line-height: 25px;
  height: 100px;
`;

export const HomeImg = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 20px;
`;

export const HomeLink = styled(Link)`
  width: 180px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  margin: 0 auto;
  border-radius: 30px;
  background-color: #555;
  color: #ddd;
  &:hover {
    background-color: #888;
    color: #fff;
  }
`;
export const HomeBtn = styled.button``;
