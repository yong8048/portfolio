import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const HomeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

export const HomeContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
`;

export const HomeTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;
export const HomeSubTitle = styled.h1`
  font-size: 350x;
  font-weight: bold;
  line-height: 40px;
`;

export const HomeDescription = styled.h3`
  font-size: 20px;
  line-height: 25px;
  height: 100px;
`;

export const HomeImg = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 20px;
`;

export const HomeLink = styled(Link)`
  width: 200px;
  height: 70px;
  text-align: center;
  line-height: 70px;
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
