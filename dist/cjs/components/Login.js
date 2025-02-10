"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
// Define styled components with default values
const Container = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.bgColor || '#f0f0f0'}; /* Default background */
`;
const FormContainer = styled_components_1.default.div `
  background-color: ${(props) => props.bgColor || 'white'};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  color: ${(props) => props.textColor || '#333'}; /* Default text color */
`;
const Button = styled_components_1.default.button `
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
const Login = ({ onLogin, onRegister, bgColor, textColor, btnColor, btnTextColor }) => {
    const [login, setLogin] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: login ? ((0, jsx_runtime_1.jsx)(Container, { bgColor: bgColor, children: (0, jsx_runtime_1.jsxs)(FormContainer, { bgColor: bgColor, textColor: textColor, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Welcome Back!" }), (0, jsx_runtime_1.jsxs)("form", { className: "login-form", onSubmit: (e) => {
                            e.preventDefault();
                            onLogin(e);
                            return false;
                        }, children: [(0, jsx_runtime_1.jsx)("input", { type: "email", placeholder: "Email", required: true }), (0, jsx_runtime_1.jsx)("input", { type: "password", placeholder: "Password", required: true }), (0, jsx_runtime_1.jsx)(Button, { type: "submit", btnColor: btnColor, btnTextColor: btnTextColor, children: "Login" }), (0, jsx_runtime_1.jsxs)("div", { className: "message", children: ["Don't have an account?", ' ', (0, jsx_runtime_1.jsx)("span", { style: { color: 'blue', cursor: 'pointer' }, onClick: () => setLogin(false), children: "Register" })] })] })] }) })) : ((0, jsx_runtime_1.jsx)(Container, { bgColor: bgColor, children: (0, jsx_runtime_1.jsxs)(FormContainer, { bgColor: bgColor, textColor: textColor, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Create Account" }), (0, jsx_runtime_1.jsxs)("form", { className: "register-form", onSubmit: (e) => {
                            e.preventDefault();
                            onRegister(e);
                            return false;
                        }, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Username", required: true }), (0, jsx_runtime_1.jsx)("input", { type: "email", placeholder: "Email", required: true }), (0, jsx_runtime_1.jsx)("input", { type: "password", placeholder: "Password", required: true }), (0, jsx_runtime_1.jsx)(Button, { type: "submit", btnColor: btnColor, btnTextColor: btnTextColor, children: "Register" }), (0, jsx_runtime_1.jsxs)("div", { className: "message", children: ["Already have an account?", ' ', (0, jsx_runtime_1.jsx)("span", { style: { color: 'blue', cursor: 'pointer' }, onClick: () => setLogin(true), children: "Login" })] })] })] }) })) }));
};
exports.Login = Login;
//# sourceMappingURL=Login.js.map