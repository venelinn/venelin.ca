import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Section from "../../components/Section";

import "./portfolio.scss"

const PortfolioList = () => (
  <StaticQuery
  query={graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            name
            url
            types
          }
        }
      }
    }
  `}
    render={data => (
      <>
        <ul>
         {
          data.allProjectsJson.edges.map(item => (
            <li key={item.node.name}>
              {item.node.name}
            </li>
          ))
        }
        </ul>
      </>
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
