import { styled } from 'styled-components';

export const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.background};
`;
