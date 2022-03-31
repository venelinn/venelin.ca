import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../SVG';
import './Social.scss';

const Social = ({ data }) => {
  return (
    <div className='social intro__social'>
      <ul className='social__list'>
        {data.map(item => (
          <li key={item.node.icon}>
            <a
              href={`${item.node.url}`}
              target='_blank'
              rel='noopener noreferrer'
              title={`${item.node.name}`}
            >
              <SVG icon={`${item.node.icon}`} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Social;
export { Social };

PropTypes.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};
