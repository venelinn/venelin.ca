import React, { useState } from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import './portfolio.scss';
// https://416serg.me/building-a-custom-accessible-image-lightbox-in-gatsbyjs/
const Portfolio = props => {
  const items = props.folio.projects;

  const [state, setState] = useState({
    showLightbox: false,
    selectedImage: null,
    moreData: null
  });

  const openModal = item => {
    setState({
      showLightbox: true,
      selectedImage: item.image,
      moreData: {
        name: item.name,
        url: item.url,
        description: item.description,
        types: item.types
      }
    });
  };

  const closeModal = () => {
    setState({
      ...state,
      showLightbox: false
    });
  };

  return (
    <>
      <div className='portfolio-content'>
        <Fade cascade bottom delay={600}>
          <div className='stack'>
            {items.map((item, index) => (
              <div className='bgrid folio-item' key={index}>
                <div
                  key={index}
                  className='folio-item__link'
                  type='button'
                  onClick={() => openModal(item)}
                >
                  <Img fluid={item.image.fluid} />
                  <span className='folio-item-table'>
                    <span className='folio-item-cell'>
                      <h3 className='folio-title'>{item.name}</h3>
                      <span className='folio-types'>{item.types}</span>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>

      {state.showLightbox && (
        <Dialog className='modal' onDismiss={() => closeModal()}>
          <div className='modal__header'>
            <Img fluid={state.selectedImage.fluid} />
          </div>
          <div className='modal__content'>
            <div className='modal__content__name'>
              <a
                href={state.moreData.url}
                target='_blank'
                rel='noopener noreferrer'
                title='Visit'
              ></a>
            </div>
            <p>{state.moreData.description}</p>
            <div className='modal__categories'>{state.moreData.types}</div>
          </div>
          <div className='modal__footer'>
            {state.moreData.url ? (
              <a
                href={state.moreData.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                Visit
              </a>
            ) : (
              ''
            )}
            <button type='button' onClick={() => closeModal()}>
              Close
            </button>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default Portfolio;
