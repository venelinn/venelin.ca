import React from "react"
import classes from "./Footer.module.scss";

const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.copyright}>© {new Date().getFullYear()}, Built with Gatsby. I love you Lea!</div>
    {` `}
  </footer>
)


export default Footer
