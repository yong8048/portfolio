import { css, styled } from 'styled-components';

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

  text-align: center;
  :hover {
    color: #888;
    transition: color 0.3s ease-in-out;
  }
`;
export const HeaderLine = styled.div<{ pathname: string }>`
  width: 100%;
  height: 2px;
  margin-top: -10px;
  background-color: #f00;
  transition: all 0.5s ease-in-out;
  ${(props) => GetPathPositon(props.pathname)}
`;

const GetPathPositon = (pathname: string) => {
  switch (pathname) {
    case '/':
      return css`
        width: 53px;
      `;
    case '/profile':
      return css`
        margin-left: 144px;
        width: 56px;
      `;
    case '/work':
      return css`
        margin-left: 291px;
        width: 46px;
      `;
    case '/contact':
      return css`
        margin-left: 428px;
        width: 71px;
      `;
  }
};
