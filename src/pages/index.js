import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Header from "../components/Header"
import About from "../components/About"
import Resume from "../components/Resume"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO
        title="Venelin.ca"
        keywords={[`front-end`, `ui`, `react`]}
      />
      <Header />
      <About data={data} />
      <Resume />
      <Portfolio />
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
    contentfulAbout {
      title
      subtitle
      slug
      content {
        childContentfulRichText {
          html
        }
      }
    }
    allContentfulExperience {
      edges {
        node {
          position
          company
          description
          start
          end
        }
      }
    }
  }
`
