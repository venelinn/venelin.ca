import { createGlobalStyle } from 'styled-components'

import JostTTF from "../fonts/jost/Jost-400-Book.ttf"
import JostWOFF2 from "../fonts/jost/Jost-400-Book.woff2"
import LeagueSpartanOTF from "../fonts/LeagueSpartan/LeagueSpartan-Bold.otf"
import LeagueSpartanWOFF2 from "../fonts/LeagueSpartan/LeagueSpartan-Bold.woff2"

export {
  JostTTF,
  JostWOFF2,
  LeagueSpartanOTF,
  LeagueSpartanWOFF2
}

export default createGlobalStyle`
  :root {
    --base-color: #ff0100;
    --color-dark: #313131;
    --color-light: #444;
    --page-max-width: 850px;
    --custom-ease-1: cubic-bezier(0.475,0.425,0,0.995);
    --custom-ease-2: cubic-bezier(0.835,-0.005,0.06,1);
    --custom-ease-3: cubic-bezier(0.19,1,0.22,1);
    --custom-ease-4: cubic-bezier(0.63,0.03,0.21,1);
    --primary-ease: var(--custom-ease-1);
    --body-font: 'Jost', serif;
    --header-font: 'League Spartan';
  }
  @font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: normal;
    font-display: optional;
    src: local("Jost"),
        url(${JostTTF}) format("ttf"),
        url(${JostWOFF2}) format("woff2");
  }
  @font-face {
    font-family: "League Spartan";
    font-style: normal;
    font-weight: normal;
    font-display: optional;
    src: local("League Spartan"),
        local("League-Spartan"),
        url(${LeagueSpartanOTF}) format("otf"),
        url(${LeagueSpartanWOFF2}) format("woff2");
  }
`
