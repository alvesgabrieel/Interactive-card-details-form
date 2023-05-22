import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  }

  body{
    background: url('../public/bg-main-desktop.png');
    background-repeat: no-repeat;
    background-size: 30% auto;

    @media (max-width: 768px) {
      background-image: '../public/bg-main-mobile.png';
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
`
export default EstiloGlobal




