import React from 'react'
import { graphql } from 'gatsby'
// import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Section from '../components/Section'

import Header from '../components/Header'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Resume from '../components/Resume'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

const IndexPage = ({ data }) => {
  const sections = data.sectionsData.edges[0].node.modules
  const intro = data.headerData
  const social = data.socialData.edges
  return (
    <Layout bodyClass="home">
      <SEO
        title="Venelin.ca"
        keywords={[
          'front-end',
          'ui',
          'react',
          'optimization',
          'performance',
          'flexbox',
        ]}
      />
      <Header header={intro} theme="dark" social={social} />

      {sections.map((section, index) => (
        <Section
          key={index}
          type={section.__typename}
          className={section.slug}
          title={section.title}
          description={section.description}
          data-theme={section.__typename === 'ContentfulContacts' ? 'dark' : ''}
        >
          {section.__typename === 'ContentfulAbout' && (
            <About key={section.id} about={section} />
          )}
          {section.__typename === 'ContentfulPortfolioList' && (
            <Portfolio key={section.id} folio={section} />
          )}
          {section.__typename === 'ContentfulExperienceList' && (
            <Resume key={section.id} jobs={section.modules} />
          )}
          {section.__typename === 'ContentfulContacts' && <Contacts />}
        </Section>
      ))}
      <Footer theme="dark" />
    </Layout>
  )
}

export default IndexPage

// IndexPage.propTypes = {
//   data: PropTypes.object,
//   about: PropTypes.object,
//   folio: PropTypes.object,
//   jobs: PropTypes.object
// };

export const query = graphql`
  query Index {
    headerData: contentfulIntro {
      title
      description
      slug
      sectionTitle
      modules {
        ... on ContentfulHero {
          title
          image {
            fluid(maxWidth: 1400, quality: 90) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          media {
            title
            description
            fluid(maxWidth: 1400, quality: 90) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    sectionsData: allContentfulModules {
      edges {
        node {
          id
          modules {
            __typename
            ... on ContentfulAbout {
              title
              description
              slug
              content {
                raw
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
                  media {
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
            ... on ContentfulContacts {
              title
              description
              slug
            }
          }
        }
      }
    }
    socialData: allContentfulSocial(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          url
          icon
        }
      }
    }
  }
`
