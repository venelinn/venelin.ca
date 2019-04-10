import React from "react"
import Section from "../Section"
import Img from "gatsby-image"

import "./portfolio.scss"

const PortfolioList = props => {
  const items = props.items;
  console.log(items);
  return (
    <div className="portfolio-content">
      <div className="stack">
        {items.map(({ node: item }) => (
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

const PortfolioModals= props => {
  const modals = props.items;

  return (
    <>
      {modals.map(({ node: item }) => (
        <div className="modal__wrap" id={`modal-${item.order}`} key={item.name}>
          <div className="modal">
            <div className="modal__header">
            <Img fluid={item.image.fluid} />
            </div>
            <div className="modal__content">
              <div className="modal__content__name">
                <a href={item.url} target="_blank" title={`Visit ${item.name}`}>{item.name}</a>
              </div>
              <p>{item.description}</p>
              <div className="modal__categories">{item.types}</div>
            </div>
            <div className="modal__footer">
              <a href={item.url} target="_blank">Visit</a>
              <a href={`#modal-close${item.order}`}>Close</a>
            </div>
          </div>
        </div>
        ))
      }
  </>
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
    <PortfolioModals items={items} />
  </Section>
  )
}

export default Portfolio
