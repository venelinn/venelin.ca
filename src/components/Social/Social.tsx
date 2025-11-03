import React from 'react';
import { Icon, type IconName } from "../Icon";
import './Social.scss';

export type SocialType = {
  name: string;
  url: string;
  icon: IconName ;
};

interface SocialProps {
  data: SocialType[];
}

export const Social = ({ data }: SocialProps) => {
  console.log("social", data);
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
              <Icon icon={item.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
