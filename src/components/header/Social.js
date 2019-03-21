import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Icon from '../Icons/Icon'

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
      <>
        <ul className="intro__social">{getSocialData(data)}</ul>
      </>
    )}
  />
)
export default Social

function getSocialData(data) {
  const socialArray = [];
  data.allSocialItemsJson.edges.forEach(item =>
    socialArray.push(<li key={item.node.name}><a  href={`${item.node.url}`} target="_blank" rel="noopener noreferrer" title={`${item.node.name}`}><Icon name={`${item.node.name}`} /></a></li>)
  );
  return socialArray;
}
