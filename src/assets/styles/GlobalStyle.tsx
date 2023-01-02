import React from 'react';
import { css, Global } from '@emotion/react';

const style = css`
  html {
    font-size: 16px;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    padding: 0;
    margin: 0;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
