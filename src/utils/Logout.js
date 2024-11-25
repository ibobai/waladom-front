// Logout.js
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import { toast } from 'react-toastify'; // For success/error messages

const Logout = () => {
  const { logout } = useContext(AuthContext); // Get logout function from context
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Call the logout function from context
    toast.success('Successfully logged out!', {
      autoClose: 3000, // 3-second duration
    });
    navigate('/login'); // Redirect to login page after logout
  }, [logout, navigate]);

  return null; // No UI for this component
};

export default Logout;
