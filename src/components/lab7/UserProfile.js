import React from 'react';
import { useUser } from './UserContext';

function UserProfile() {
  const { user, setUser } = useUser();

  return (
    <div className="user-profile">
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <button onClick={() => setUser({ name: 'Jane Doe' })}>Change Name</button>
    </div>
  );
}

export default UserProfile;
