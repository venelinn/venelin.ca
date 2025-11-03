import { graphql } from 'gatsby';

export const ContentfulAboutFragment = graphql`
  fragment ContentfulAboutFragment on ContentfulAbout {
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
`;

export const ContentfulPortfolioListFragment = graphql`
  fragment ContentfulPortfolioListFragment on ContentfulPortfolioList {
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
          gatsbyImageData(layout: FULL_WIDTH, width: 600)
        }
      }
    }
  }
`;

export const ContentfulExperienceListFragment = graphql`
  fragment ContentfulExperienceListFragment on ContentfulExperienceList {
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
`;

export const ContentfulContactsFragment = graphql`
  fragment ContentfulContactsFragment on ContentfulContacts {
    title
    description
    slug
  }
`;
