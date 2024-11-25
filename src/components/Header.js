import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import Profile from './Profile';
import logo from '../assets/logoWaladom.png';
import { FaSearch } from 'react-icons/fa'; // Search icon
import Modal from '../pages/Modal';  // Import the Modal component
import '../styles/Header.css';  // Adjust the path if necessary

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const { isLoggedIn, logout } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const pagesData = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Programs', path: '/programs' },
    { title: 'Events', path: '/events' },
    { title: 'Donate', path: '/donate' },
  ];

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      const results = pagesData.filter(page =>
        page.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Handle authentication (login/logout toggle)
  const handleAuthAction = () => {
    setLoading(true);
    if (isLoggedIn) {
      setIsModalOpen(true); // Open modal to confirm logout
    } else {
      navigate('/login');
    }
    setLoading(false);
  };

  // Handle logout confirmation
  const handleLogoutConfirm = () => {
    logout();
    toast.success('Successfully logged out!');
    setTimeout(() => {
      navigate('/'); // Redirect to home page after logout
    }, 400);
    setIsModalOpen(false); // Close the modal
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Organization Logo" />
      </div>

      <div className='navbar'>
      <Navbar />
      </div>

      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-input"
        />
        <FaSearch className="search-icon" />
        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((result, index) => (
              <div key={index} className="search-result-item">
                <a href={result.path}>{result.title}</a>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="profile-actions">
        <button
          className={`auth-button ${loading ? '' : isLoggedIn ? 'logout' : 'login'}`}
          onClick={handleAuthAction}
          disabled={loading}
        >
          {loading ? 'Processing...' : isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
      
      <div className='profile-icon'> <Profile /> </div>
      


      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close the modal
        onConfirm={handleLogoutConfirm} // Handle logout confirmation
      />
    </header>
  );
};

export default Header;
