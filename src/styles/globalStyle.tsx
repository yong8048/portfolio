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
  background-color: #111;
}

#root {
  background-color: #111;
  color: #fff;
}
`;
