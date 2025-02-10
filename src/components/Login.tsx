import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
  onLogin: (event: React.FormEvent<HTMLFormElement>) => void;
  onRegister: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Login = ({ onLogin, onRegister }: LoginProps) => {
  const [login, setLogin] = useState(false);

  return (
    <>
      {login ? (
        <div className="container">
          <div className="form-container">
            <h2 className="title">Welcome Back!</h2>
            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                onLogin(e);
                return false;
              }}
            >
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="btn">
                Login
              </button>
              <div className="message">
                Don't have an account?{' '}
                <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setLogin(false)}>
                  Register
                </span>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="form-container">
            <form
              className="register-form"
              onSubmit={(e) => {
                e.preventDefault();
                onRegister(e);
                return false;
              }}
            >
              <h2 className="title">Create Account</h2>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="btn">
                Register
              </button>
              <div className="message">
                Already have an account?{' '}
                <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setLogin(true)}>
                  Login
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
