import React from "react";
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import Icon from '../Icons/Icon'

//import "./resume.scss"

class Album extends React.Component {

  render() {
    const {
      title, source, thumbnail, images, ...props
    } = this.props;

    return (
      <div {...props}>
        <h2>{title}</h2>

        <a
          href={source}
          onClick={this.handleClickThumbnail}
        >
          <Img sizes={thumbnail} />
        </a>
      </div>
    );
  }
}

Album.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({}).isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const GallerySection = ({ data }) => (
  <div id="gallery">
    <h1>Galéria1</h1>
    <div>
      {data.albums.edges.map(({ node: album }) => (
        <Album
          key={album.frontmatter.source}
          title={album.frontmatter.title}
          source={album.frontmatter.source}
          thumbnail={album.frontmatter.thumbnail.childImageSharp.sizes}
          images={album.frontmatter.images.map(image => image.path.childImageSharp.sizes)}
        />
      ))}
    </div>
  </div>
);

GallerySection.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

const IndexPage = ({ data }) => (
  <div>
    <GallerySection data={data} />
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default IndexPage;


export const query = graphql`
  query IndexPageQuery {
    albums: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/albums/" } }
      sort: { fields: [fileAbsolutePath], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            source
            thumbnail
            images {
							path
						}
          }
        }
      }
    }
  }
`;
