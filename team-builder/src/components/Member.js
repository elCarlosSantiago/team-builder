import React from 'react';

export default function Member(props) {
  const { details } = props;

  if(!details) {
      return <h3>Fetching Deets</h3>
  }
  return (
      <div>
          <h2>{details.fname} {details.mname} {details.lname}</h2>
          <p>Likes to: {details.likes}</p>
          <p>Email: {details.email}</p>
          <p>Role: {details.role}</p>
      </div>
  )
}
