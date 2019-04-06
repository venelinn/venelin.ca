import React from "react"


const Profile = props => {
  const profile = props.info;
	return (
		<div>
		  <div className="about__label">Profile</div>
      <ul className="about__info-list">
        <li>
          <strong>Name:</strong>
          <span>{profile.name}</span>
        </li>
        <li>
          <strong>Job:</strong>
          <span>{profile.jobPosition}</span>
        </li>
        <li>
          <strong>Website:</strong>
          <span>{profile.website}</span>
          </li>
        </ul>
	  </div>
	)
}

export default Profile
