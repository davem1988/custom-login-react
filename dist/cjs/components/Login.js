"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
require("./Login.css");
// Define styled components with default values
const Container = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent};
`;
const FormContainer = styled_components_1.default.div `
  background-color: ${(props) => props.bgColor || 'white'};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  color: ${(props) => props.textColor || '#333'}; /* Default text color */
`;
const Title = styled_components_1.default.h2 `
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;
const Input = styled_components_1.default.input `
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
const Button = styled_components_1.default.button `
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
const Message = styled_components_1.default.div `
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
const Login = ({ onLogin, onRegister, bgColor, textColor, btnColor, btnTextColor }) => {
    const [login, setLogin] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsx)(FormContainer, { bgColor: bgColor, textColor: textColor, children: login ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title, { children: "Welcome Back!" }), (0, jsx_runtime_1.jsxs)("form", { className: "login-form", onSubmit: (e) => {
                            e.preventDefault();
                            onLogin(e);
                            return false;
                        }, children: [(0, jsx_runtime_1.jsx)(Input, { type: "email", placeholder: "Email", required: true }), (0, jsx_runtime_1.jsx)(Input, { type: "password", placeholder: "Password", required: true }), (0, jsx_runtime_1.jsx)(Button, { type: "submit", btnColor: btnColor, btnTextColor: btnTextColor, children: "Login" }), (0, jsx_runtime_1.jsxs)(Message, { children: ["Don't have an account? ", (0, jsx_runtime_1.jsx)("span", { onClick: () => setLogin(false), children: "Register" })] })] })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title, { children: "Create Account" }), (0, jsx_runtime_1.jsxs)("form", { className: "register-form", onSubmit: (e) => {
                            e.preventDefault();
                            onRegister(e);
                            return false;
                        }, children: [(0, jsx_runtime_1.jsx)(Input, { type: "text", placeholder: "Username", required: true }), (0, jsx_runtime_1.jsx)(Input, { type: "email", placeholder: "Email", required: true }), (0, jsx_runtime_1.jsx)(Input, { type: "password", placeholder: "Password", required: true }), (0, jsx_runtime_1.jsx)(Button, { type: "submit", btnColor: btnColor, btnTextColor: btnTextColor, children: "Register" }), (0, jsx_runtime_1.jsxs)(Message, { children: ["Already have an account? ", (0, jsx_runtime_1.jsx)("span", { onClick: () => setLogin(true), children: "Login" })] })] })] })) }) }));
};
exports.Login = Login;
//# sourceMappingURL=Login.js.map