import React, { useState } from 'react'
import Img from 'gatsby-image'
import { Fade } from 'react-awesome-reveal'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

import './portfolio.scss'

const Portfolio = (props) => {
  const items = props.folio.projects

  const [state, setState] = useState({
    name: null,
    url: null,
    description: null,
    types: null,
    media: null,
  })
  const [modal, setModal] = useState(false)

  const openModal = (item) => {
    setModal(true)
    setState({
      name: item.name,
      url: item.url,
      description: item.description,
      types: item.types,
      media: item.media.map((img) => img),
    })
  }

  return (
    <>
      <div className="portfolio">
        <div className="portfolio__grid">
          <Fade cascade triggerOnce damping={0.1} direction="up">
            {items.map((item, index) => (
              <div className="folio" key={index}>
                <div
                  className="folio__link"
                  type="button"
                  onClick={() => openModal(item)}
                  aria-hidden="true"
                >
                  <Img fluid={item.media[0].fluid} />
                  <span className="folio__item">
                    <span className="folio__item__cell">
                      <h3 className="folio__item__title">{item.name}</h3>
                      <span className="folio__item__types">{item.types}</span>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>

      {modal && (
        <Dialog
          data-theme="light"
          className="modal"
          onDismiss={() => setModal(false)}
        >
          <div
            className="modal__header"
            data-slider={state.media.length > 1 ? 'true' : null}
          >
            {state.media.length > 1 ? (
              <section className="carousel" aria-label="Gallery">
                <ol className="carousel__viewport">
                  {state.media.map((item, index) => (
                    <li
                      key={index}
                      id={`carousel__slide${index}`}
                      className="carousel__slide"
                    >
                      <Img fluid={item.fluid} />
                      <span className="carousel__snapper">
                        {index !== 0 && (
                          <a
                            href={`#carousel__slide${index - 1}`}
                            className="carousel__nav carousel__nav--prev"
                          >
                            Go to previous
                          </a>
                        )}
                        {(index === index.length - 1 || index === 0) && (
                          <a
                            href={`#carousel__slide${index + 1}`}
                            className="carousel__nav carousel__nav--next"
                          >
                            Go to next
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            ) : (
              state.media.map((item, index) => (
                <Img key={index} fluid={item.fluid} />
              ))
            )}
          </div>
          <div className="modal__content">
            <div className="modal__content__name">
              {state.url ? (
                <a
                  href={state.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit"
                >
                  {state.name}
                </a>
              ) : (
                <span>{state.name}</span>
              )}
            </div>
            <p>{state.description}</p>
            <div className="modal__categories">{state.types}</div>
          </div>
          <div className="modal__footer">
            {state.url ? (
              <a href={state.url} target="_blank" rel="noopener noreferrer">
                Visit
              </a>
            ) : null}
            <button type="button" onClick={() => setModal(false)}>
              Close
            </button>
          </div>
        </Dialog>
      )}
    </>
  )
}

export default Portfolio
