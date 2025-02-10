import React, { useState } from 'react';
import styled from 'styled-components';
import './Login.css';

// Define styled components with default values
const Container = styled.div<{ bgColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent};
`;

const FormContainer = styled.div<{ bgColor?: string; textColor?: string }>`
  background-color: ${(props) => props.bgColor || 'white'};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  color: ${(props) => props.textColor || '#333'}; /* Default text color */
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  color: #333;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button<{ btnColor?: string; btnTextColor?: string }>`
  width: 100%;
  padding: 15px;
  background-color: ${(props) => props.btnColor || '#007bff'};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.btnTextColor || 'white'};
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #888;

  span {
    color: #007bff;
    cursor: pointer;
    font-weight: 600;

    &:hover {
      color: #0056b3;
    }
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
    <Container>
      <FormContainer bgColor={bgColor} textColor={textColor}>
        {login ? (
          <>
            <Title>Welcome Back!</Title>
            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                onLogin(e);
                return false;
              }}
            >
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button type="submit" btnColor={btnColor} btnTextColor={btnTextColor}>
                Login
              </Button>
              <Message>
                Don't have an account? <span onClick={() => setLogin(false)}>Register</span>
              </Message>
            </form>
          </>
        ) : (
          <>
            <Title>Create Account</Title>
            <form
              className="register-form"
              onSubmit={(e) => {
                e.preventDefault();
                onRegister(e);
                return false;
              }}
            >
              <Input type="text" placeholder="Username" required />
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button type="submit" btnColor={btnColor} btnTextColor={btnTextColor}>
                Register
              </Button>
              <Message>
                Already have an account? <span onClick={() => setLogin(true)}>Login</span>
              </Message>
            </form>
          </>
        )}
      </FormContainer>
    </Container>
  );
};
