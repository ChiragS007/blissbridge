import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
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
                <form className="login-form">
                    <div className="input-group">
                        <label htmlFor="username">
              <span role="img" aria-label="user">
                👤
              </span>
                        </label>
                        <input type="text" id="username" placeholder="Username" required />
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
