import React, { useState, useEffect } from "react";
import axios from "axios";

const SERVER_URL = "https://03a7-2a02-842a-112f-3301-8112-6603-434a-eb45.ngrok-free.app";

const PayPalIntegrationPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [webhookId, setWebhookId] = useState(null);
  const [error, setError] = useState("");

  // Check if user is connected or if there's an error from the query parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");

    if (status === "connected") {
      verifyConnection(); // Verify connection with the backend
    } else if (status === "error") {
      setError("There was an error connecting to PayPal.");
    }
  }, []);

  const verifyConnection = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/paypal/verify`);
      if (response.data.isConnected) {
        setIsConnected(true);
      } else {
        setError("Connection verification failed.");
      }
    } catch (err) {
      setError("Connection verification failed.");
    }
  };

  const connectToPayPal = () => {
    window.location.href = `${SERVER_URL}/api/paypal/connect`;
  };

  const createWebhook = async () => {
    try {
      const response = await axios.post(`${SERVER_URL}/api/paypal/webhook`);
      setWebhookId(response.data.webhookId);
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to create webhook.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>PayPal Integration</h1>
      <div style={{ marginBottom: "20px" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}

        {isConnected ? (
          <>
            <p style={{ color: "green" }}>Your PayPal account is connected!</p>
            <button
              style={{
                padding: "10px 20px",
                background: "#0070BA",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={createWebhook}
            >
              Create Webhook
            </button>
          </>
        ) : (
          <>
            <p style={{ color: "red" }}>Your PayPal account is not connected.</p>
            <button
              style={{
                padding: "10px 20px",
                background: "#FFAA00",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={connectToPayPal}
            >
              Connect to PayPal
            </button>
          </>
        )}
      </div>

      {webhookId && (
        <div style={{ marginTop: "20px" }}>
          <h2>Webhook Created</h2>
          <p>
            <strong>Webhook ID:</strong> {webhookId}
          </p>
        </div>
      )}
    </div>
  );
};

export default PayPalIntegrationPage;
