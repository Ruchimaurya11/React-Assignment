import React, { useState } from "react";

// Login Component
function Login({ onLogin, isLoggedIn }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login Page</h2>
      <button
        style={{
          ...styles.button,
          backgroundColor: isLoggedIn ? "grey" : "blue", // Change color if logged in
          cursor: isLoggedIn ? "not-allowed" : "pointer",
        }}
        onClick={onLogin}
        disabled={isLoggedIn} // Disable button if logged in
      >
        Login
      </button>
    </div>
  );
}

// Logout Component
function Logout({ onLogout, isLoggedIn }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Logout Page</h2>
      <button
        style={{
          ...styles.button,
          backgroundColor: !isLoggedIn ? "grey" : "blue", // Change color if logged out
          cursor: !isLoggedIn ? "not-allowed" : "pointer",
        }}
        onClick={onLogout}
        disabled={!isLoggedIn} // Disable button if logged out
      >
        Logout
      </button>
    </div>
  );
}

// Main App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={styles.row}>
      {/* Always show both Login and Logout components */}
      <Login onLogin={() => setIsLoggedIn(true)} isLoggedIn={isLoggedIn} />
      <Logout onLogout={() => setIsLoggedIn(false)} isLoggedIn={isLoggedIn} />
    </div>
  );
}

// CSS styles (inline)
const styles = {
  row: {
    display: "flex", // Arrange items in a row
    justifyContent: "center", // Center the containers horizontally
    gap: "20px", // Add space between containers
    marginTop: "50px",
    
  },
  container: {
    textAlign: "center",
    border: "10px solid grey",
    padding: "20px",
    width: "200px",
    borderRadius: "10px",
    backgroundColor: "aqua",
    height:"150px",
    
  },
  heading: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
