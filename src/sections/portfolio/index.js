import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Section from "../../components/Section"
import Img from "gatsby-image"

import "./portfolio.scss"

const PortfolioList = () => (
  <StaticQuery
  query={graphql`
    query ProjectsQuery {
      allPortfolioJson {
        edges {
          node {
            id
            name
            url
            types
            description
            photos {
              childImageSharp {
                resolutions(
                  width: 256
                  height: 256
                  cropFocus: CENTER
                  quality: 92
                ) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `}
    render={data => (
      <div className="portfolio-content">
        <div className="stack">
         {
          data.allPortfolioJson.edges.map(item => (
            <div className="bgrid folio-item" key={item.node.id}>
              <a href="#" className="folio-item__link">
                <Img resolutions={item.node.childImageSharp.resolutions.src} className={styles.image} />
                <span className="folio-item-table">
                  <span className="folio-item-cell">
                      <h3 className="folio-title">{item.node.name}</h3>
                      <span className="folio-types">{item.node.types}</span>
                  </span>
                </span>
              </a>
          </div>
          ))
        }
        </div>
      </div>
    )}
  />
)

const Portfolio = () => (
  <Section
    className="portfolio"
    title="Portfolio"
    description="Check Out Some of My Works"
    >
    <PortfolioList />
  </Section>
)

export default Portfolio
