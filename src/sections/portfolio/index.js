import React from "react"
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Section from "../../components/Section";
//import ImageGrid from "../../components/ImageGrid";

import "./portfolio.scss"

const Portfolio = ({ data }) => (
  <Section
    className="portfolio"
    title="Portfolio"
		description="Check Out Some of My Works"
    >

    <div className="portfolio-content">
      {data.allPortfolioJson.edges.map( node => (
        <div>{node.name}</div>
      ))}
    </div>
  </Section>
);


export default Portfolio

export const query = graphql`
  query projectsQuery {
    allPortfolioJson {
      edges {
        node {
          name
          url
          types
        }
      }
    }
  }
`