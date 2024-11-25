import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import '../styles/MyRole.css'

const MyRole = () => {
  const { isLoggedIn } = useAuthContext(); // Access auth state
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="my-role-page">
      <h1>My Role</h1>
      {isLoggedIn ? (
        <div>
          <h2>Welcome to your role page!</h2>
          <p>Your current role in the organization is: <strong>Member</strong>.</p>
          <p>You can explore more details about your responsibilities and privileges here.</p>
        </div>
      ) : (
        <div>
          <h2>What is a Role?</h2>
          <p>
            In our organization, a "role" represents your responsibilities and contributions
            as a member. Each role plays a vital part in achieving our mission to serve the community.
          </p>
          <p>
            Would you like to join us and discover your potential role? Becoming a member
            unlocks opportunities for collaboration, growth, and impact.
          </p>
          <button onClick={handleJoinClick} className="join-button">
            Join Us
          </button>
        </div>
      )}
    </div>
  );
};

export default MyRole;
