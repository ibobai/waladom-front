// src/components/Profile.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import profile from '../assets/profile.png'; // Import the profile image

const Profile = () => {
  return (
    <div className="profile-info">
      {/* Link to Profile Page */}
      <Link to="/profile">
        <img 
          src={profile} 
          alt="Profile" 
          className="profile-img" 
        />
      </Link>
    </div>
  );
};

export default Profile;
