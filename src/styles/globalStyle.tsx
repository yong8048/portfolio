import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
${normalize}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

button {
  line-height: 1.5;
  background:transparent;
  border:none;
  outline:none;
  cursor:pointer;
}

input {
  outline:none;
  border:none;
}

* {
  box-sizing: border-box;
  color: #fff;
}

a {
  text-decoration: none;
  color:inherit;
}

body {
  width: 1256px;
  margin: 0 auto;
  font-family: 'Pretendard-Regular';
  background-color: #333333;
  background-size: 4px 4px;
  background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 0%, 0) 0,
      hsla(0, 0%, 10%, 1) 3px
    ),
    linear-gradient(90deg, hsla(0, 0%, 0%, 0) 0, hsla(0, 0%, 10%, 1) 5px);

  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;

  -ms-overflow-style: none; 
  scrollbar-width: none; 
}

body::-webkit-scrollbar {
  display: none;
}

#root {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
}
`;
