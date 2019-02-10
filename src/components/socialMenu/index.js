import React from 'react'

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);

export default ({ items }) => (
  <ul className="social-menu">
    {  }
    {/* {items.map(({ name, url }) => (
      <li key={name}>
        <a target="_blank" href={url}>
          <span className={`icon icon-${name}`} />
        </a>
      </li>
    ))} */}
  </ul>
)