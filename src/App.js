import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Donate from './pages/Donate';
import Login from './utils/Login';
import Logout from './utils/Logout';
import Profile from './pages/Profile';
import SearchResults from './pages/SearchResults';
import Header from './components/Header';
import Footer from './pages/Footer';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Unauthorized from './pages/Unauthorized'; // New Unauthorized page
import MyIDCard from './pages/MyIDCard'; // Protected page
import MyRole from './pages/MyRole'; // Protected page
import ProtectedRoute from './components/ProtectedRoute'; // Route guard
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext'; // Context for auth
import NotFound from './pages/NotFound'; // Import the 404 component
import './i18n';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          {/* Global Header */}
          <Header />

          {/* Page Routes */}
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/my-role" element={<MyRole />} /> {/* Add MyRole Route */}
              {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />

            {/* Protected Routes */}
            <Route
              path="/my-id-card"
              element={
                <ProtectedRoute>
                  <MyIDCard />
                </ProtectedRoute>
              }
            />
          </Routes>

          {/* Toast Notifications */}
          <ToastContainer />

          {/* Global Footer */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
