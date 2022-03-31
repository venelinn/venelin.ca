import React from 'react'
import PropTypes from 'prop-types';
import Img from 'gatsby-image'
import Plx from 'react-plx'

const Hero = ({ data }) => {
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
        <Img
          className="hero__image"
          fluid={data.image.fluid}
          title={data.title}
        />
      </Plx>
    </div>
  )
}

export default Hero
export { Hero }

Hero.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}
