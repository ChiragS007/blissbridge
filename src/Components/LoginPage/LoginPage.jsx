import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
    // State variables for the username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log("Username:", username, "Password:", password);
        // You can add your backend logic here (e.g., send the data to your backend API)
    };

    return (
        <div className="login-page">
            <div className="left-section">
                <div className="background-image">
                    <div className="overlay-text">
                        {/* Optional text or logo */}
                    </div>
                </div>
            </div>
            <div className="right-section">
                <h1 className="login-title">Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">
              <span role="img" aria-label="user">
                👤
              </span>
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // Update username state
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
              <span role="img" aria-label="password">
                🔒
              </span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                    <div className="divider">OR</div>
                    <button type="button" className="signup-button">
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
