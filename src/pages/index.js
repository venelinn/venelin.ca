import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { About } from '../components/About';
import { Contacts } from '../components/Contacts';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import Layout from '../components/Layout';
import { Portfolio } from '../components/Portfolio';
import { Resume } from '../components/Resume';
import Section from '../components/Section';
import { Seo } from '../components/Seo';

const IndexPage = props => {
  const sections = props.data.sectionsData.edges[0].node.modules;
  const intro = props.data.headerData;
  const social = props.data.socialData.edges;
  return (
    <Layout bodyClass='home'>
      <Seo
        title={'Venelin.ca'}
        keywords={[
          `front-end`,
          `ui`,
          `react`,
          'optimization',
          'performance',
          'flexbox',
        ]}
      />
      <Header header={intro} theme={'dark'} social={social} />

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
            <About
              key={section.id}
              content={section.content}
              profile={section.modules[0]}
            />
          )}
          {section.__typename === 'ContentfulPortfolioList' && (
            <Portfolio key={section.id} items={section.projects} />
          )}
          {section.__typename === 'ContentfulExperienceList' && (
            <Resume key={section.id} jobs={section.modules} />
          )}
          {section.__typename === 'ContentfulContacts' && <Contacts />}
        </Section>
      ))}
      <Footer theme={'dark'} />
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  about: PropTypes.object,
  folio: PropTypes.object,
  jobs: PropTypes.object,
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
            gatsbyImageData(layout: FULL_WIDTH, width: 1400)
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
            ...ContentfulAboutFragment
            ...ContentfulPortfolioListFragment
            ...ContentfulExperienceListFragment
            ...ContentfulContactsFragment
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
