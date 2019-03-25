import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Icon from '../Icons/Icon'

const Timeline = () => (
  <StaticQuery
    query={graphql`
      query ExperienceQuery {
        allExperienceJson {
          edges {
            node {
              position
              company
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="timeline-wrap">{getData(data)}</div>
      </>
    )}
  />
)
export default Timeline

function getData(data) {
  const dataArray = [];
  data.allExperienceJson.edges.forEach(item =>
    dataArray.push(<div classNam="timeline-block" key={item.node.company}><a href={`${item.node.position}`} target="_blank" rel="noopener noreferrer" title={`${item.node.company}`}><Icon name='bag' /></a></div>)
  );
  return dataArray;
}
