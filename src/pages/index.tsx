import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import { About } from '../components/About';
import { Contacts } from '../components/Contacts';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Portfolio } from '../components/Portfolio';
import { Resume } from '../components/Resume';
import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { HeaderData, SocialType } from '../types/types'
import type { IGatsbyImageData } from 'gatsby-plugin-image';

// --- GraphQL Data Types ---
type ContentfulHero = {
  title: string;
  image?: { gatsbyImageData: IGatsbyImageData };
};

type ContentfulAboutModule = {
  id: string;
  content?: any;
  modules?: any[];
};

type ContentfulPortfolioProject = {
  id: string;
  name: string;
  url?: string;
  description?: string;
  types?: string;
  media: any[];
};

type ContentfulPortfolioList = {
  id: string;
  projects: ContentfulPortfolioProject[];
};

type ContentfulExperienceList = {
  id: string;
  modules: any[];
};

type ContentfulContacts = {};

type SectionNode = {
  __typename: string;
  id: string;
  slug?: string;
  title?: string;
  description?: string;
  content?: any;
  modules?: any[];
  projects?: ContentfulPortfolioProject[];
};

type IndexPageData = {
  headerData: HeaderData;
  sectionsData: {
    edges: {
      node: {
        id: string;
        modules: SectionNode[];
      };
    }[];
  };
  socialData: {
    edges: {
      node: SocialType;
    }[];
  };
};

const IndexPage: React.FC<PageProps<IndexPageData>> = ({ data }) => {
  const sections = data.sectionsData.edges[0].node.modules;
  const intro = data.headerData;
  const social = data.socialData.edges;

  return (
    <Layout bodyClass='home'>
      <Seo
        title='Venelin.ca'
        keywords={['front-end', 'ui', 'react', 'optimization', 'performance', 'flexbox']}
      />
      <Header header={intro} theme='dark' social={social.map(edge => edge.node)} />

      {sections.map((section) => (
        <Section
          key={section.id}
          type={section.__typename}
          className={section.slug}
          title={section.title}
          description={section.description}
          data-theme={section.__typename === 'ContentfulContacts' ? 'dark' : undefined}
        >
          {section.__typename === 'ContentfulAbout' && (
            <About content={section.content} profile={section.modules?.[0]} />
          )}
          {section.__typename === 'ContentfulPortfolioList' && (
            <Portfolio items={section.projects || []} />
          )}
          {section.__typename === 'ContentfulExperienceList' && (
            <Resume jobs={section.modules || []} />
          )}
          {section.__typename === 'ContentfulContacts' && <Contacts />}
        </Section>
      ))}

      <Footer theme='dark' />
    </Layout>
  );
};

export default IndexPage;

// --- GraphQL Query ---
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
