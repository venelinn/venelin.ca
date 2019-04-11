import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import GlobalStyle from '../styles/global'
import Section from "../components/Section"
import Header from "../components/Header"
import Resume from "../components/Resume1"

class HomePage extends React.Component {
  render() {
    const sections = this.props.data.allContentfulModules.edges[0].node;
    //sections.modules.forEach( i => console.log(i));
    return (
      <Layout>
        <SEO
          title={"Venelin.ca"}
          keywords={[`front-end`, `ui`, `react`, 'optimization', 'performance', 'flexbox']}
        />
        <GlobalStyle />
        {sections.modules.map((section, index) => (
         	<Section
            key={index}
            className={section.slug}
            title={section.title}
            description={section.description}
          >
          {section.__typename === 'ContentfulIntro' && (
            <Header key={section.id} hero={section} />
          )}
          {section.__typename === 'ContentfulExperienceList' && (
            <Resume key={section.id} jobs={section.modules} />
          )}
          </Section>
        ))}
      </Layout>
    )
  }
}

export default HomePage;

HomePage.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query Home {
  allContentfulModules {
    edges {
      node {
        id
        modules {
          __typename
          ... on ContentfulIntro {
            __typename
            id
            title
            slug
            description
            modules {
              ... on ContentfulHero {
                id
                title
                image {
                  fluid(maxWidth: 1400, quality: 90) {
                    ...GatsbyContentfulFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
          ... on ContentfulAbout {
            title
            description
            slug
            content {
              childContentfulRichText {
                html
              }
            }
            modules {
              ... on ContentfulProfile {
                name
                jobPosition
                website
              }
            }
          }
          ... on ContentfulPortfolioList {
            title
            description
            slug
            projects {
              ... on ContentfulPortfolio {
                name
                url
                types
                description
                image {
                  fluid(maxWidth: 500, quality: 80) {
                    ...GatsbyContentfulFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
          ... on ContentfulExperienceList {
            title
            description
            slug
            modules {
              ... on ContentfulExperience {
                id
                position
                description
                company
                start(formatString: "MMM YYYY")
                end(formatString: "MMM YYYY")
              }
            }
          }
        }
      }
    }
  }
}


`
