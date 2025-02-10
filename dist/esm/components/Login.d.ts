import React from 'react';
import './Login.css';
interface LoginProps {
    onLogin: (event: React.FormEvent<HTMLFormElement>) => void;
    onRegister: (event: React.FormEvent<HTMLFormElement>) => void;
    bgColor?: string;
    textColor?: string;
    btnColor?: string;
    btnTextColor?: string;
}
export declare const Login: ({ onLogin, onRegister, bgColor, textColor, btnColor, btnTextColor }: LoginProps) => import("react/jsx-runtime").JSX.Element;
export {};
