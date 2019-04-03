import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = ({height}) => (
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
      <div className="hero__image">
        <Img
          resolutions={data.placeholderImage.childImageSharp.resolutions}
          style={{ width: `100%`, display: `block`, height }}
        />
      </div>
    )}
  />
)

Hero.defaultProps = {
  height: `100vh`
};

export default Hero
