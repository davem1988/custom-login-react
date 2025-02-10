import React, { useState } from 'react';
import styled from 'styled-components';

// Define styled components with default values
const Container = styled.div<{ bgColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.bgColor || '#f0f0f0'}; /* Default background */
`;

const FormContainer = styled.div<{ bgColor?: string; textColor?: string }>`
  background-color: ${(props) => props.bgColor || 'white'};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  color: ${(props) => props.textColor || '#333'}; /* Default text color */
`;

const Button = styled.button<{ btnColor?: string; btnTextColor?: string }>`
  background-color: ${(props) => props.btnColor || '#007bff'};
  color: ${(props) => props.btnTextColor || 'white'};
  padding: 10px;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.9;
  }
`;

interface LoginProps {
  onLogin: (event: React.FormEvent<HTMLFormElement>) => void;
  onRegister: (event: React.FormEvent<HTMLFormElement>) => void;
  bgColor?: string; // Background color
  textColor?: string; // Text color
  btnColor?: string; // Button color
  btnTextColor?: string; // Button text color
}

export const Login = ({ onLogin, onRegister, bgColor, textColor, btnColor, btnTextColor }: LoginProps) => {
  const [login, setLogin] = useState(false);

  return (
    <>
      {login ? (
        <Container bgColor={bgColor}>
          <FormContainer bgColor={bgColor} textColor={textColor}>
            <h2>Welcome Back!</h2>
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
              <Button type="submit" btnColor={btnColor} btnTextColor={btnTextColor}>
                Login
              </Button>
              <div className="message">
                Don't have an account?{' '}
                <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setLogin(false)}>
                  Register
                </span>
              </div>
            </form>
          </FormContainer>
        </Container>
      ) : (
        <Container bgColor={bgColor}>
          <FormContainer bgColor={bgColor} textColor={textColor}>
            <h2>Create Account</h2>
            <form
              className="register-form"
              onSubmit={(e) => {
                e.preventDefault();
                onRegister(e);
                return false;
              }}
            >
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <Button type="submit" btnColor={btnColor} btnTextColor={btnTextColor}>
                Register
              </Button>
              <div className="message">
                Already have an account?{' '}
                <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setLogin(true)}>
                  Login
                </span>
              </div>
            </form>
          </FormContainer>
        </Container>
      )}
    </>
  );
};
