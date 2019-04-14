import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Icon from '../icons'
import styles from './Social.module.scss'
import SVG from '../../components/SVG';

const Social = () => (
  <StaticQuery
    query={graphql`
      query SocialIitemsQuery {
        allSocialItemsJson {
          edges {
            node {
              name
              url
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.intro__social__root}>
        <ul className={styles.intro__social}>
         {
          data.allSocialItemsJson.edges.map(item => (
            <li key={item.node.name}>
              <a href={`${item.node.url}`} target="_blank" rel="noopener noreferrer" title={`${item.node.name}`}>
                <SVG icon={`${item.node.name}`} />
              </a>
            </li>
          ))
        }
        </ul>
      </div>
    )}
  />
)
export default Social
