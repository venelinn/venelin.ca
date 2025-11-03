import React from 'react';
import { Icon } from '../Icon';
import './Social.scss';

export type SocialType = {
  name: string;
  url: string;
  icon: string;
};

interface SocialProps {
  data: SocialType[];
}

export const Social = ({ data }: SocialProps) => {
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
              <Icon icon={`${item.node.icon}`} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
