import React from 'react'

const Profile = ({ info }) => {
  return (
    <>
      <h4>Profile</h4>
      <ul className="about__info-list">
        <li>
          <strong>Name:</strong>
          <span>{info.name}</span>
        </li>
        <li>
          <strong>Job:</strong>
          <span>{info.jobPosition}</span>
        </li>
        <li>
          <strong>Website:</strong>
          <span>{info.website}</span>
        </li>
      </ul>
    </>
  )
}

export default Profile
