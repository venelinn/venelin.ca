import { createGlobalStyle } from 'styled-components';

import JostTTF from '../fonts/jost/Jost-400-Book.ttf';
import JostWOFF2 from '../fonts/jost/Jost-400-Book.woff2';
import LeagueSpartanOTF from '../fonts/LeagueSpartan/LeagueSpartan-Bold.otf';
import LeagueSpartanWOFF2 from '../fonts/LeagueSpartan/LeagueSpartan-Bold.woff2';

export { JostTTF, JostWOFF2, LeagueSpartanOTF, LeagueSpartanWOFF2 };

export default createGlobalStyle`
  :root {
    --base-color: #ff0100;
    --color-dark: #313131;
    --color-light: #444;
    --color-white: 255,255,255;
    --color-black: 0,0,0;
    --page-max-width: 850px;
    --text-in: cubic-bezier(.31,.11,.12,.99);
    --primary-ease: var(--custom-ease-1);
    --body-font: 'Jost', serif;
    --header-font: 'League Spartan';
  }
  @font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: local("Jost"),
        url(${JostTTF}) format("ttf"),
        url(${JostWOFF2}) format("woff2");
  }
  @font-face {
    font-family: "League Spartan";
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: local("League Spartan"),
        local("League-Spartan"),
        url(${LeagueSpartanOTF}) format("otf"),
        url(${LeagueSpartanWOFF2}) format("woff2");
  }
`;
