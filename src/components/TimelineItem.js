import PropTypes from 'prop-types';
import React from 'react';

const transparentPixelSrc =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const Video = ({
  poster, className, ...props
}) => (
    <div
      style={
        poster && {
          background: `url(${poster}) center / contain no-repeat`,
        }
      }
    >
      <video
        {...poster && { poster: transparentPixelSrc }}
        {...props}
      />
    </div>
);

Video.propTypes = {
  poster: PropTypes.string,
  className: PropTypes.string,
};

Video.defaultProps = {
  poster: '',
  className: '',
};

export default Video;
