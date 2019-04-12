import React from "react"
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import "./portfolio.scss"
// https://416serg.me/building-a-custom-accessible-image-lightbox-in-gatsbyjs/
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      showLightbox: false,
      selectedImage: null,
    };
  }

  render() {
    const items = this.props.items.projects;
    console.log(this.props);
    const { selectedImage, showLightbox } = this.state;
    return (
      <>
        <div className="portfolio-content">
          <div className="stack">
            {items.map((item, index) => (
              <div className="bgrid folio-item" key={index}>
                <a
                  key={index}
                  className="folio-item__link"
                  type="button"
                  onClick={() => this.setState({ showLightbox: true, selectedImage: image })}
                >
                  <Img fluid={image.image.fluid} />
                </a>
              </div>
            ))}
          </div>
        </div>
        {showLightbox && (
        <Dialog>
          <Img fluid={selectedImage.image.fluid} />
          <button type="button" onClick={() => this.setState({ showLightbox: false })}>
            Close
          </button>
        </Dialog>
        )}
      </>
    );
  }
}

const PortfolioList = props => {
  const items = props.items.projects;
  return (
    <div className="portfolio-content">
      <div className="stack">
        {items.map((item, index) => (
          <div className="bgrid folio-item" key={index}>
            <a href={`#modal-${item.order}`} className="folio-item__link">
            <Img fluid={item.image.fluid} />
              <span className="folio-item-table">
                <span className="folio-item-cell">
                    <h3 className="folio-title">{item.name}</h3>
                    <span className="folio-types">{item.types}</span>
                </span>
              </span>
            </a>
          </div>
          ))
        }
      </div>
  </div>
  )
}

const Portfolio1 = props =>  {
  return (
  <>
    <PortfolioList items={props.folio} />
  </>
  )
}



export default Portfolio
