import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MediaItem } from "./Portfolio";
import "./PortfolioSlider.scss";

interface PortfolioSliderProps {
  media: MediaItem[];
}

export const PortfolioSlider = ({ media }: PortfolioSliderProps) => {
  return (
    <section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        {media.map((img, idx) => {
          const imageData = img && getImage(img);
          if (!imageData) return null;

          return (
            <li
              key={idx}
              id={`carousel__slide${idx}`}
              tabIndex={0}
              className="carousel__slide"
            >
              <GatsbyImage image={imageData} alt={`Portfolio image ${idx}`} />
              <span className="carousel__snapper">
                {idx > 0 && (
                  <a
                    href={`#carousel__slide${idx - 1}`}
                    className="carousel__nav carousel__nav--prev"
                  >
                    Go to previous
                  </a>
                )}
                {idx < media.length - 1 && (
                  <a
                    href={`#carousel__slide${idx + 1}`}
                    className="carousel__nav carousel__nav--next"
                  >
                    Go to next
                  </a>
                )}
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
