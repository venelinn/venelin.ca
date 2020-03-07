import React, { useState } from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import './portfolio.scss';

const Portfolio = props => {
  const items = props.folio.projects;

  const [state, setState] = useState({
    image: null,
    name: null,
    url: null,
    description: null,
    types: null
  });
  const [modal, setModal] = useState(false);

  const openModal = item => {
    setModal(true);
    setState({
      image: item.image,
      name: item.name,
      url: item.url,
      description: item.description,
      types: item.types
    });
  };

  return (
    <>
      <div className='portfolio'>
        <Fade cascade bottom delay={600}>
          <div className='portfolio__grid'>
            {items.map((item, index) => (
              <div className='folio' key={index}>
                <div
                  className='folio__link'
                  type='button'
                  onClick={() => openModal(item)}
                >
                  <Img fluid={item.image.fluid} />
                  <span className='folio__item'>
                    <span className='folio__item__cell'>
                      <h3 className='folio__item__title'>{item.name}</h3>
                      <span className='folio__item__types'>{item.types}</span>
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
            <Img fluid={state.image.fluid} />
          </div>
          <div className='modal__content'>
            <div className='modal__content__name'>
              {state.url ? (
                <a
                  href={state.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Visit'
                >
                  {state.name}
                </a>
              ) : (
                <span>{state.name}</span>
              )}
            </div>
            <p>{state.description}</p>
            <div className='modal__categories'>{state.types}</div>
          </div>
          <div className='modal__footer'>
            {state.url ? (
              <a href={state.url} target='_blank' rel='noopener noreferrer'>
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
