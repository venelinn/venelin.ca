import React from 'react'
import SVG from '../SVG'

import './Social.scss'

const Social = ({ data }) => (
  <div className="social intro__social">
    <ul className="social__list">
      {data.map((item) => (
        <li key={item.node.icon}>
          <a
            href={item.node.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.node.name}
          >
            <SVG icon={item.node.icon} />
          </a>
        </li>
      ))}
    </ul>
  </div>
)
export default Social
