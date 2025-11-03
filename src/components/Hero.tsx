import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Plx from 'react-plx';

interface HeroProps {
  data: {
    image: any;
    title: string;
  };
}

export const Hero = ({ data }: HeroProps) => {
  const image = getImage(data.image);
  if (!image) return null; // or fallback content
  return (
    <div className='hero'>
      <Plx
        parallaxData={[
          {
            start: 1,
            duration: '.hero',
            properties: [
              {
                startValue: 1,
                endValue: 1.3,
                property: 'scale',
              },
            ],
          },
        ]}
      >
        <GatsbyImage
          image={image}
          alt={`Venelin Nikolov: ${data.title}`}
          className='hero__image'
        />
      </Plx>
    </div>
  );
};
