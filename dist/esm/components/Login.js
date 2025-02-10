import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
import './Login.css';
// Define styled components with default values
const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent};
`;
const FormContainer = styled.div `
  background-color: ${(props) => props.bgColor || 'white'};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  color: ${(props) => props.textColor || '#333'}; /* Default text color */
`;
const Title = styled.h2 `
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;
const Input = styled.input `
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
const Button = styled.button `
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
const Message = styled.div `
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
export const Login = ({ onLogin, onRegister, bgColor, textColor, btnColor, btnTextColor }) => {
    const [login, setLogin] = useState(false);
    return (_jsx(Container, { children: _jsx(FormContainer, { bgColor: bgColor, textColor: textColor, children: login ? (_jsxs(_Fragment, { children: [_jsx(Title, { children: "Welcome Back!" }), _jsxs("form", { className: "login-form", onSubmit: (e) => {
                            e.preventDefault();
                            onLogin(e);
                            return false;
                        }, children: [_jsx(Input, { type: "email", placeholder: "Email", required: true }), _jsx(Input, { type: "password", placeholder: "Password", required: true }), _jsx(Button, { type: "submit", btnColor: btnColor, btnTextColor: btnTextColor, children: "Login" }), _jsxs(Message, { children: ["Don't have an account? ", _jsx("span", { onClick: () => setLogin(false), children: "Register" })] })] })] })) : (_jsxs(_Fragment, { children: [_jsx(Title, { children: "Create Account" }), _jsxs("form", { className: "register-form", onSubmit: (e) => {
                            e.preventDefault();
                            onRegister(e);
                            return false;
                        }, children: [_jsx(Input, { type: "text", placeholder: "Username", required: true }), _jsx(Input, { type: "email", placeholder: "Email", required: true }), _jsx(Input, { type: "password", placeholder: "Password", required: true }), _jsx(Button, { type: "submit", btnColor: btnColor, btnTextColor: btnTextColor, children: "Register" }), _jsxs(Message, { children: ["Already have an account? ", _jsx("span", { onClick: () => setLogin(true), children: "Login" })] })] })] })) }) }));
};
//# sourceMappingURL=Login.js.map