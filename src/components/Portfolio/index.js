import React from "react"
import Section from "../Section"
import Img from "gatsby-image"

import "./portfolio.scss"

const PortfolioList = props => {
  const items = props.items.projects;
  return (
    <div className="portfolio-content">
      <div className="stack">
        {items.map((item, index) => (
          <div className="bgrid folio-item" key={item.name}>
            <a href={`#modal-${item.order}`} className="folio-item__link">
            <Img fluid={item.image.fluid} />
              <span className="folio-item-table">
                <span className="folio-item-cell">
                    <h3 className="folio-title">{item.name}</h3>
                    <span className="folio-types">{item.types}</span>
                </span>
              </span>
            </a>
          </div>
          ))
        }
      </div>
  </div>
  )
}


const Portfolio = props =>  {
  return (
  <>
    <PortfolioList items={props.folio} />
  </>
  )
}

export default Portfolio
