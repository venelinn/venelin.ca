import React from 'react'
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Plx from 'react-plx'

const Hero = ({ data }) => {
  const image = getImage(data.image);
  return (
    <div className="hero">
      <Plx parallaxData={[
        {
          start: 1,
          duration: '.hero',
          properties: [
            {
              startValue: 1,
              endValue: 1.3,
              property: "scale"
            },
          ],
        },
      ]}>
        <GatsbyImage image={image} alt={`Venelin Nikolov: ${data.title}`} className="hero__image" />
      </Plx>
    </div>
  )
}

export default Hero
export { Hero }

Hero.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}
