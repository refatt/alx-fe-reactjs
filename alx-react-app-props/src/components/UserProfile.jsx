import React, { useContext } from 'react';
import { UserContext } from '../UserContext'; // Named import

function UserProfile() {
  const { name, age, bio } = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{age}</span></p>
      <p style={{ fontSize: '16px', color: '#555' }}>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
