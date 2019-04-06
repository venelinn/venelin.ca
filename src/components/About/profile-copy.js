import React from "react"
import { StaticQuery, graphql } from 'gatsby'

const Profile = () => (
  <StaticQuery
    query={graphql`
      query ProfileQuery {
        allProfileJson {
          edges {
            node {
              label
              text
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <div className="about__label">Profile</div>
        <ul className="about__info-list">{getProfileData(data)}</ul>
      </div>
    )}
  />
)
export default Profile

function getProfileData(data) {
  const profileArray = [];
  data.allProfileJson.edges.forEach(item =>
    profileArray.push(<li key={item.node.label}><strong>{item.node.label}</strong><span>{item.node.text}</span></li>)
  );
  return profileArray;
}