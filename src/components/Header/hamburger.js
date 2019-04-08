import React from "react"

import "./Hamburger.scss"

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }
  closeMenu() {
    this.setState({ menuOpen: false })
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <div class="hamburger ">
        <div class="hamburger-wrapper">
          <div class="hbutton"><button class="button-hamburger">
              <div class="background-hamburger background-is-white "></div>
              <div class="background-hamburger white background-is-white inactive"></div>
              <div class="icon-hamburger background-is-white false">
                <div class="line-center"></div>
              </div>
              <div class="icon-close background-is-white "></div>
            </button></div>
        </div>
        <button class="click-layer"></button>
      </div>
    )
  }
}

export default Menu