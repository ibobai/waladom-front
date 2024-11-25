import React from 'react';
import { useAuthContext } from '../context/AuthContext';

const MyIDCard = () => {
  const { user } = useAuthContext();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My ID Card</h1>
      <p>ID: {user?.id}</p>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default MyIDCard;
