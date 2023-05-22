import { createGlobalStyle } from "styled-components";
import bgDesktop from '../../public/bg-main-desktop.png'
import bgMobile from '../../public/bg-main-mobile.png'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  }

  body{
    background-image: url(${bgDesktop});
    background-repeat: no-repeat;
    background-size: 30% auto;

    @media (max-width: 768px) {
      background: url(${bgMobile});
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
`
export default EstiloGlobal




