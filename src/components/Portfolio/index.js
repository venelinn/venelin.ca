import React, { useState } from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import './portfolio.scss';

const Portfolio = props => {
  const items = props.folio.projects;

  const [state, setState] = useState({
    selectedImage: null,
    moreData: null
  });
  const [modal, setModal] = useState(false);

  const openModal = item => {
    setModal(true);
    setState({
      selectedImage: item.image,
      moreData: {
        name: item.name,
        url: item.url,
        description: item.description,
        types: item.types
      }
    });
  };

  return (
    <>
      <div className='portfolio-content'>
        <Fade cascade bottom delay={600}>
          <div className='stack'>
            {items.map((item, index) => (
              <div className='folio-item' key={index}>
                <div
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

      {modal && (
        <Dialog
          data-theme='light'
          className='modal'
          onDismiss={() => setModal(false)}
        >
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
            <button type='button' onClick={() => setModal(false)}>
              Close
            </button>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default Portfolio;
