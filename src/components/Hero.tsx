import React from 'react';
import Plx from 'react-plx';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface HeroProps {
  title: string;
  image?: IGatsbyImageData | null;
}

export const Hero = ({ title, image }: HeroProps) => {
  const gatsbyImage = image ? getImage(image) : null;

  if (!gatsbyImage) return null; // No image fallback

  return (
    <div className='hero'>
      <Plx
        parallaxData={[
          {
            start: 1,
            duration: '.hero',
            properties: [
              { startValue: 1, endValue: 1.3, property: 'scale' },
            ],
          },
        ]}
      >
        <GatsbyImage
          image={gatsbyImage}
          alt={`Venelin Nikolov: ${title}`}
          className='hero__image'
        />
      </Plx>
    </div>
  );
};
