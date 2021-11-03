import { createGlobalStyle } from 'styled-components';

import JostTTF from '../fonts/jost/Jost-400-Book.ttf';
import JostWOFF2 from '../fonts/jost/Jost-400-Book.woff2';
import LeagueSpartanOTF from '../fonts/LeagueSpartan/LeagueSpartan-Bold.otf';
import LeagueSpartanWOFF2 from '../fonts/LeagueSpartan/LeagueSpartan-Bold.woff2';

export { JostTTF, JostWOFF2, LeagueSpartanOTF, LeagueSpartanWOFF2 };

export default createGlobalStyle`
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
