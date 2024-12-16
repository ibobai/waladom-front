import React, { useState, useEffect } from 'react';

const StripeConnectPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [authCode, setAuthCode] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleConnectStripe = () => {
    // Redirect to the backend's Stripe OAuth endpoint
    window.location.href = 'https://d90e-2a02-842a-112f-3301-484-dddf-eb42-5817.ngrok-free.app/api/stripe/connection/connect';
  };
  

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const code = urlParams.get('code');
    const message = urlParams.get('message');
  
    if (status === 'connected' && code) {
      setIsConnected(true);
      setAuthCode(code);
    } else if (status === 'error') {
      setErrorMessage(message || 'There was an error connecting to Stripe.');
      console.error('Stripe connection error:', message || 'Unknown error');
    }
  }, []);
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Stripe Connection</h1>

      {isConnected ? (
        <div className="p-4 mb-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            ✅ Connected to Stripe!<br />
            Authorization Code: {authCode}
          </p>
        </div>
      ) : errorMessage ? (
        <div className="p-4 mb-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">
            ❌ Error: {errorMessage}
          </p>
        </div>
      ) : (
        <button
          onClick={handleConnectStripe}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Connect to Stripe
        </button>
      )}
    </div>
  );
};

export default StripeConnectPage;
