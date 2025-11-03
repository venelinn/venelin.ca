import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type ContentfulHero = {
  title: string;
  image?: { gatsbyImageData: IGatsbyImageData };
};

export type SocialType = {
  name: string;
  url?: string;
  icon?: string;
};

export type HeaderData = {
  title: string;
  description?: string;
  sectionTitle?: string;
  modules: ContentfulHero[];
};
