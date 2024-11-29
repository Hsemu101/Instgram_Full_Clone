import React from 'react'
import { useParams } from 'react-router-dom';

function Profile() {
  const { username } = useParams(); // Gets the dynamic part of the route

  return (
    <div>
      <h1>Welcome to {username}'s Profile</h1>
    </div>
  );
}

export default Profile