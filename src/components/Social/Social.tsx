import React from 'react';
import { Icon, type IconName } from "../Icon";
import { SocialType } from '../../types/types'
import './Social.scss';

interface SocialProps {
  data: SocialType[];
}

export const Social = ({ data }: SocialProps) => {
  return (
    <div className='social intro__social'>
      <ul className='social__list'>
        {data.map(item => (
          <li key={item.icon}>
            <a
              href={`${item.url}`}
              target='_blank'
              rel='noopener noreferrer'
              title={item.name}
            >
              <Icon icon={item.icon as IconName} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
