import React from 'react';
import './Login.css';
interface LoginProps {
    onLogin: (event: React.FormEvent<HTMLFormElement>) => void;
    onRegister: (event: React.FormEvent<HTMLFormElement>) => void;
}
export declare const Login: ({ onLogin, onRegister }: LoginProps) => React.JSX.Element;
export {};
