import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Access Restricted</h1>
      <p>
        You must be logged in to access this page. Join our organization to
        unlock access!
      </p>
      <button
        onClick={handleLoginRedirect}
        style={{
          backgroundColor: '#4CAF50',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Login Now
      </button>
    </div>
  );
};

export default Unauthorized;
