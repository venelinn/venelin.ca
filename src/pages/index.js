import React from "react"
import PropTypes from 'prop-types';
import Layout from "../layout"
import SEO from "../layout/seo"

import Header from "../sections/header"
import About from "../sections/about"
import Resume from "../sections/resume"
import Portfolio from "../sections/portfolio"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Venelin.ca"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Header />
    <About />
    <Resume />
    <Portfolio />
  </Layout>
)

export default IndexPage;

