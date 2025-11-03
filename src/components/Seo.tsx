import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: string[];
  keywords?: string[];
  shareImage?: string;
}

export const Seo = ({
  title,
  description = '',
  lang = 'en',
  meta = [],
  keywords = [],
}: SeoProps) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;

        const metaTags = [
          {
            name: 'description',
            content: metaDescription,
          },
          {
            property: 'og:image',
            content: data.site.siteMetadata.shareImage,
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: metaDescription,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:creator',
            content: data.site.siteMetadata.author,
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:description',
            content: metaDescription,
          },
        ]
          .concat(
            keywords.length > 0
              ? {
                  name: 'keywords',
                  content: keywords.join(', '),
                }
              : []
          )
          .concat(meta);

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={metaTags}
          />
        );
      }}
    />
  );
};

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        shareImage
      }
    }
  }
`;
