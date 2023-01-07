import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow"]};
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    background-color: ${(props) => props.theme["base-input"]};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["yellow"]};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  body {
    background: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  @media screen and (max-width: 1024px) {
    html {
      font-size: 97.5%;
    }
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;
