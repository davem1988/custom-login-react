import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
// Define styled components with default values
const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.bgColor || '#f0f0f0'}; /* Default background */
`;
const FormContainer = styled.div `
  background-color: ${(props) => props.bgColor || 'white'};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  color: ${(props) => props.textColor || '#333'}; /* Default text color */
`;
const Button = styled.button `
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
export const Login = ({ onLogin, onRegister, bgColor, textColor, btnColor, btnTextColor }) => {
    const [login, setLogin] = useState(false);
    return (_jsx(_Fragment, { children: login ? (_jsx(Container, { bgColor: bgColor, children: _jsxs(FormContainer, { bgColor: bgColor, textColor: textColor, children: [_jsx("h2", { children: "Welcome Back!" }), _jsxs("form", { className: "login-form", onSubmit: (e) => {
                            e.preventDefault();
                            onLogin(e);
                            return false;
                        }, children: [_jsx("input", { type: "email", placeholder: "Email", required: true }), _jsx("input", { type: "password", placeholder: "Password", required: true }), _jsx(Button, { type: "submit", btnColor: btnColor, btnTextColor: btnTextColor, children: "Login" }), _jsxs("div", { className: "message", children: ["Don't have an account?", ' ', _jsx("span", { style: { color: 'blue', cursor: 'pointer' }, onClick: () => setLogin(false), children: "Register" })] })] })] }) })) : (_jsx(Container, { bgColor: bgColor, children: _jsxs(FormContainer, { bgColor: bgColor, textColor: textColor, children: [_jsx("h2", { children: "Create Account" }), _jsxs("form", { className: "register-form", onSubmit: (e) => {
                            e.preventDefault();
                            onRegister(e);
                            return false;
                        }, children: [_jsx("input", { type: "text", placeholder: "Username", required: true }), _jsx("input", { type: "email", placeholder: "Email", required: true }), _jsx("input", { type: "password", placeholder: "Password", required: true }), _jsx(Button, { type: "submit", btnColor: btnColor, btnTextColor: btnTextColor, children: "Register" }), _jsxs("div", { className: "message", children: ["Already have an account?", ' ', _jsx("span", { style: { color: 'blue', cursor: 'pointer' }, onClick: () => setLogin(true), children: "Login" })] })] })] }) })) }));
};
//# sourceMappingURL=Login.js.map