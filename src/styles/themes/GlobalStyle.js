import { css, createGlobalStyle } from "styled-components";

const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    background: #808080;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    font-size: 16px;
    font-family: "MontserratRegular", serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Intro Demo", sans-serif;
  }
`;

export const GlobalStyle = createGlobalStyle(global);
