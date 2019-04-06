import React from "react"
import Section from "../Section"
import Img from "gatsby-image"

import "./portfolio.scss"

const PortfolioList= props => {
  const items = props.items;
  return (
    <div className="portfolio-content">
    <div className="stack">
      {items.map(({ node: item }) => (
        <div className="bgrid folio-item" key={item.name}>
          <span className="folio-item__link">
            <Img fluid={item.image.fluid} />
            <span className="folio-item-table">
              <span className="folio-item-cell">
                  <h3 className="folio-title">{item.name}</h3>
                  <span className="folio-types">{item.types}</span>
              </span>
            </span>
          </span>
        </div>
        ))
      }
    </div>
  </div>
  )
}

const Portfolio = props =>  {
  const items = props.folio.edges;
  return (
  <Section
    className="portfolio"
    title="Portfolio"
    description="Check Out Some of My Works"
    >
    <PortfolioList items={items} />
  </Section>
  )
}

export default Portfolio
