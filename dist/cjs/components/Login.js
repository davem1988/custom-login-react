"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const react_1 = __importStar(require("react"));
require("./Login.css");
const Login = ({ onLogin, onRegister }) => {
    const [login, setLogin] = (0, react_1.useState)(false);
    return (react_1.default.createElement(react_1.default.Fragment, null, login ? (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("div", { className: "form-container" },
            react_1.default.createElement("h2", { className: "title" }, "Welcome Back!"),
            react_1.default.createElement("form", { className: "login-form", onSubmit: (e) => {
                    e.preventDefault();
                    onLogin(e);
                    return false;
                } },
                react_1.default.createElement("input", { type: "email", placeholder: "Email", required: true }),
                react_1.default.createElement("input", { type: "password", placeholder: "Password", required: true }),
                react_1.default.createElement("button", { type: "submit", className: "btn" }, "Login"),
                react_1.default.createElement("div", { className: "message" },
                    "Don't have an account?",
                    ' ',
                    react_1.default.createElement("span", { style: { color: 'blue', cursor: 'pointer' }, onClick: () => setLogin(false) }, "Register")))))) : (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("div", { className: "form-container" },
            react_1.default.createElement("form", { className: "register-form", onSubmit: (e) => {
                    e.preventDefault();
                    onRegister(e);
                    return false;
                } },
                react_1.default.createElement("h2", { className: "title" }, "Create Account"),
                react_1.default.createElement("input", { type: "text", placeholder: "Username", required: true }),
                react_1.default.createElement("input", { type: "email", placeholder: "Email", required: true }),
                react_1.default.createElement("input", { type: "password", placeholder: "Password", required: true }),
                react_1.default.createElement("button", { type: "submit", className: "btn" }, "Register"),
                react_1.default.createElement("div", { className: "message" },
                    "Already have an account?",
                    ' ',
                    react_1.default.createElement("span", { style: { color: 'blue', cursor: 'pointer' }, onClick: () => setLogin(true) }, "Login"))))))));
};
exports.Login = Login;
//# sourceMappingURL=Login.js.map