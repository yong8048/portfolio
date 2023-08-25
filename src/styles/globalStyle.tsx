import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
${normalize}

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
}

a {
  text-decoration: none;
  color:inherit;
}
body {
  width: 1256px;
  margin: 0 auto;
  background-color: #000;

  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
}

#root {
  background-color: #000;
  color: #fff;
}
`;
