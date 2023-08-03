import { styled } from 'styled-components';

export const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.background};
`;

export const HomePageMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
