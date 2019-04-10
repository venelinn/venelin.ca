import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Section from "../components/Section"
import Header from "../components/Header"

class HomePage extends React.Component {
  render() {
    const sections = this.props.data.allContentfulModules.edges[0].node;
    console.log(sections);
    return (
      <>
        {sections.modules.map((section, index) => (
         	<Section
            key={index}
            className={section.id}
            title={section.title}
            description={section.description}
          >
            {/* {section.__typename === 'ContentfulIntro' && (
              <Header key={section.id} hero={section.ContentfulIntro} />
            )} */}
          </Section>
        ))}
      </>

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
              id
              title
              description
              sectionTitle
              modules {
                __typename
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
                __typename
                ... on ContentfulProfile {
                  name
                  jobPosition
                  website
                }
              }
            }
            ... on ContentfulPortfolio {
              title
              description
              projects {
                __typename
                ... on ContentfulPortfolioItems {
                  name
                  url
                  types
                  description
                  image {
                  fluid(maxWidth: 500, quality: 80) {
                      src
                    }
                  }
                }
              }
            }
            ... on ContentfulExperience {
              title
              description
              modules {
                __typename
                ... on ContentfulExperienceList {
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
