import React, { useCallback } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useTheme, ThemeProvider } from '../theme';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import GlobalStyle from '../styles/global';
import Section from '../components/Section';

import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

const ChangeThemeButton = ({ children, theme }) => {
  const [currentTheme, setTheme] = useTheme();
  const changeTheme = useCallback(() => setTheme(theme), [theme, setTheme]);
  return (
    <button
      className={theme === currentTheme ? 'active' : ''}
      onClick={changeTheme}
    >
      {children}
    </button>
  );
};

const ThemeClassOnBody = () => {
  const [theme] = useTheme();
  return (
    <Helmet>
      <body data-theme={theme} />
    </Helmet>
  );
};

const IndexPage = props => {
  const sections = props.data.sectionsData.edges[0].node;
  const intro = props.data.headerData;
  const social = props.data.socialData.edges;

  return (
    <Layout>
      <ThemeProvider>
        <SEO
          title={'Venelin.ca'}
          keywords={[
            `front-end`,
            `ui`,
            `react`,
            'optimization',
            'performance',
            'flexbox'
          ]}
        />
        <GlobalStyle />
        <ThemeClassOnBody />
        <Header header={intro} theme={'dark'} social={social} />
        {/* <ChangeThemeButton theme='dark'>Dark theme</ChangeThemeButton>
        <ChangeThemeButton theme='light'>Light theme</ChangeThemeButton> */}
        {/* All sections */}
        {sections.modules.map((section, index) => (
          <Section
            key={index}
            type={section.__typename}
            className={section.slug}
            title={section.title}
            description={section.description}
            data-theme={
              section.__typename === 'ContentfulContacts' ? 'dark' : ''
            }
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
        <Footer theme={'dark'} />
      </ThemeProvider>
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object,
  about: PropTypes.object,
  folio: PropTypes.object,
  jobs: PropTypes.object
};

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
`;
