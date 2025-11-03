import React, { useEffect, useRef } from "react";
import { PortfolioItem, MediaItem } from "./Portfolio";
import { PortfolioSlider } from "./PortfolioSlider";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./PortfolioModal.scss";

interface PortfolioModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

export const PortfolioModal = ({ item, onClose }: PortfolioModalProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = modalRef.current;
    if (!dialog) return;

    dialog.showModal();

    const handleClose = () => onClose();

    dialog.addEventListener("cancel", handleClose);
    dialog.addEventListener("close", handleClose);

    return () => {
      dialog.removeEventListener("cancel", handleClose);
      dialog.removeEventListener("close", handleClose);
    };
  }, [onClose]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = e.currentTarget;
    const rect = dialog.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      onClose();
    }
  };

  return (
    <dialog
      ref={modalRef}
      data-theme="light"
      className="modal-wrapper"
      onClick={handleOutsideClick}
    >
      <div className="modal">
        <div className="modal__header" data-slider={item.media.length > 1 ? "true" : undefined}>
          {item.media.length > 1 ? (
            <PortfolioSlider media={item.media} />
          ) : (
            item.media.map((img: MediaItem, idx) => {
              const imageData = img && getImage(img);
              if (!imageData) return null;
              return <GatsbyImage key={idx} image={imageData} alt={`Portfolio image ${idx}`} />;
            })
          )}
        </div>

        <div className="modal__content">
          <div className="modal__content__name">
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            ) : (
              <span>{item.name}</span>
            )}
          </div>
          {item.description && <p>{item.description}</p>}
          {item.types && <div className="modal__categories">{item.types}</div>}
        </div>

        <div className="modal__footer">
          {item.url && (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
          )}
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};
