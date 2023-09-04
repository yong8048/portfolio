import { styled } from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #f00;
`;

export const HeaderNav = styled.nav`
  width: 500px;
  height: 60px;

  line-height: 60px;
`;

export const HeaderUl = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
`;

export const HeaderLi = styled.li`
  font-weight: 500;
  font-size: 20px;
  :hover {
    color: #888;
    transition: color 0.3s ease-in-out;
  }
`;
