import PropTypes from 'prop-types';
import React from 'react';
import Video from './TimelineItem';

const PresentationVideo = ({
  company,
  position,
  ...props
}) => (
  <article {...props}>
    <div>
      <h2>{position}</h2>
    </div>

    <div>
      <Video
        src={company}
      />
    </div>
  </article>
);

PresentationVideo.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

PresentationVideo.defaultProps = {
  className: '',
};

export default PresentationVideo;
