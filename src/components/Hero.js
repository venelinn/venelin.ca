import React, {useState, useEffect} from 'react'
import Img from 'gatsby-image'
import Plx from 'react-plx';
import { useTransition, animated, config } from 'react-spring'
//import styles from './Hero.module.scss'

//import "./Hero.module.scss"

const Hero = props => {
  console.log(props.data.media)
  const slides = props.data.media;
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.index, {
    from: { opacity: 0, transform: 'scale(1.1)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' },
    //config: config.molasses,
    config: {duration: 1000},
  });

  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 6000), [])
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      style={{ ...props }}>
      <Img
          className="hero__image"
          fluid={item.fluid}
        />
      </animated.div>
  ))
  // return (
  //   <div className="hero">
  //     <Plx
  //       parallaxData={[
  //         {
  //           start: 1,
  //           duration: '.hero',
  //           properties: [
  //             {
  //               startValue: 1,
  //               endValue: 1.3,
  //               property: "scale"
  //             },
  //           ],
  //         },
  //       ]}
  //     >
  //       <Img
  //         className="hero__image"
  //         fluid={props.data.image.fluid}
  //         title={props.data.title}
  //       />
  //     </Plx>
  //   </div>
  // )
}

export default Hero
