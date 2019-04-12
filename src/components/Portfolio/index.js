import React from "react"
import Img from "gatsby-image"
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import "./portfolio.scss"
// https://416serg.me/building-a-custom-accessible-image-lightbox-in-gatsbyjs/
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLightbox: false,
      selectedImage: null,
      data: this.props
    };
  }

  render() {
    const items = this.props.folio.projects;
    const { selectedImage, showLightbox } = this.state;
    return (
      <>
        <div className="portfolio-content">
          <div className="stack">
            {items.map((item, index) => (
              <div className="bgrid folio-item" key={index}>
                <div
                  key={index}
                  className="folio-item__link"
                  type="button"
                  onClick={() => this.setState({ showLightbox: true, selectedImage: item.image })}
                >
                  <Img fluid={item.image.fluid} />
                  <span className="folio-item-table">
                    <span className="folio-item-cell">
                        <h3 className="folio-title">{item.name}</h3>
                        <span className="folio-types">{item.types}</span>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showLightbox && (
        <Dialog
          className="modal"
          onDismiss={() => this.setState({ showLightbox: false })}
        >
          <div className="modal__header">
            <Img fluid={selectedImage.fluid} />
          </div>
          {/* <div className="modal__content">
            <div className="modal__content__name">
            <a href={selectedImage.url} target="_blank" rel="noopener noreferrer" title="Visit">{selectedImage.name}</a></div>
              <p>{selectedImage.description}</p>
            <div className="modal__categories">{data.types}</div>
          </div> */}
          <div className="modal__footer">
            <a href="{{url}}" target="_blank" rel="noopener">Visit</a>
            <button type="button" onClick={() => this.setState({ showLightbox: false })}>Close</button>
          </div>
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
