import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import GlobalStyle from '../styles/global'

import Header from "../components/Header"
import About from "../components/About"
import Resume from "../components/Resume"
import Portfolio from "../components/Portfolio"
import Contacts from "../components/Contacts"
import Footer from "../components/Footer"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO
        title={"Venelin.ca"}
        keywords={[`front-end`, `ui`, `react`, 'optimization', 'performance', 'flexbox']}
      />
      <GlobalStyle />
      <Header hero={data.heroData} />
      <About aboutme={data.aboutData} profile={data.profileData} />
      <Resume jobs={data.experienceData} />
      <Portfolio folio={data.portfolioData} />
      <Contacts/>
      <Footer/>
    </Layout>
  )
}

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query Index {
    heroData: contentfulHero {
      title
      image {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
    aboutData: contentfulAbout {
      title
      subtitle
      slug
      content {
        childContentfulRichText {
          html
        }
      }
    }
    experienceData: allContentfulExperience (
      sort: {
        fields: [end]
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          id
          position
          description
          company
          start(formatString: "MMM YYYY")
          end(formatString: "MMM YYYY")
        }
      }
    }
    profileData: contentfulProfile {
      name
      jobPosition
      website
    }
    portfolioData: allContentfulPortfolio (
      sort: {
        fields: [order]
        order: DESC
      }
    ) {
      edges {
        node {
          name
          url
          types
          description
          order
          image {
            fluid(
              maxWidth: 500,
              quality: 80
            ) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
