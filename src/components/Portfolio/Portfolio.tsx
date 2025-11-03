import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { GatsbyImage, getImage, type IGatsbyImageData } from "gatsby-plugin-image";
import { PortfolioModal } from "./";
import "./Portfolio.scss";

export type MediaItem = IGatsbyImageData | null;

export interface PortfolioItem {
  name: string;
  url?: string;
  description?: string;
  types?: string;
  media: MediaItem[];
}

interface PortfolioProps {
  items: PortfolioItem[];
}

export const Portfolio = ({ items }: PortfolioProps) => {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <div className="portfolio">
        <div className="portfolio__grid">
          <Fade cascade triggerOnce damping={0.1} direction="up">
            {items.map((item, index) => {
              const thumb = getImage(item.media[0]);
              if (!thumb) return null;

              return (
                <div className="folio" key={index}>
                  <div className="folio__item">
                    <h3 className="folio__item__title">{item.name}</h3>
                    <span className="folio__item__types">{item.types}</span>
                  </div>
                  <button
                    type="button"
                    className="folio__link"
                    title={item.name}
                    onClick={() => setActiveItem(item)}
                  >
                    <GatsbyImage image={thumb} alt={item.name} />
                  </button>
                </div>
              );
            })}
          </Fade>
        </div>
      </div>

      {activeItem && (
        <PortfolioModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </>
  );
};
