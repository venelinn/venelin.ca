import React from 'react'

import SocialMenu from '../socialMenu'

const Menus = ({ socialItems }) => (
  <div className="header__menu text-color-from-scheme-text-color">
    <div className="header__menu__social-container">
      <SocialMenu items={socialItems} />
    </div>
  </div>
)

export default Menus
