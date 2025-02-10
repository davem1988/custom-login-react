import React, { useState } from 'react';
import './Login.css';
export const Login = ({ onLogin, onRegister }) => {
    const [login, setLogin] = useState(false);
    return (React.createElement(React.Fragment, null, login ? (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "form-container" },
            React.createElement("h2", { className: "title" }, "Welcome Back!"),
            React.createElement("form", { className: "login-form", onSubmit: (e) => {
                    e.preventDefault();
                    onLogin(e);
                    return false;
                } },
                React.createElement("input", { type: "email", placeholder: "Email", required: true }),
                React.createElement("input", { type: "password", placeholder: "Password", required: true }),
                React.createElement("button", { type: "submit", className: "btn" }, "Login"),
                React.createElement("div", { className: "message" },
                    "Don't have an account?",
                    ' ',
                    React.createElement("span", { style: { color: 'blue', cursor: 'pointer' }, onClick: () => setLogin(false) }, "Register")))))) : (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "form-container" },
            React.createElement("form", { className: "register-form", onSubmit: (e) => {
                    e.preventDefault();
                    onRegister(e);
                    return false;
                } },
                React.createElement("h2", { className: "title" }, "Create Account"),
                React.createElement("input", { type: "text", placeholder: "Username", required: true }),
                React.createElement("input", { type: "email", placeholder: "Email", required: true }),
                React.createElement("input", { type: "password", placeholder: "Password", required: true }),
                React.createElement("button", { type: "submit", className: "btn" }, "Register"),
                React.createElement("div", { className: "message" },
                    "Already have an account?",
                    ' ',
                    React.createElement("span", { style: { color: 'blue', cursor: 'pointer' }, onClick: () => setLogin(true) }, "Login"))))))));
};
//# sourceMappingURL=Login.js.map