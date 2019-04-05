import React from "react"
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = ({height, className}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            resolutions(width: 1400, height: 980, quality: 90) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    `}
    render={data => (
      <div className={className}>
        <Img
          resolutions={data.placeholderImage.childImageSharp.resolutions}
          style={{ width: `100%`, display: `block`, height }}
        />
      </div>
    )}
  />
)

Hero.propTypes = {
  className: PropTypes.string,
};

Hero.defaultProps = {
  height: `100vh`
};

export default Hero
