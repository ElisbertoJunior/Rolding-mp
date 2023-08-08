import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const colors =  {
  white: '#FFFFFF',
  gray: '#9b9b9b',
  textColor: '#3A2D29',
  red: '#BF1B2C',
  gold: '#AC9034',
  silver: '#9C9C9C'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    list-style: none;
    text-decoration: none;
    color: ${colors.textColor};
    
     h3, h2 {
      font-weight: bold;
     }

  }

  .container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 8px;
    
  }

  @media (max-width: ${breakpoints.tablet}) {
  html {
    font-size: 87.5%;
  }

  }
`
export default GlobalStyle