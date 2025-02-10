# custom-login-react

A simple and customizable login and registration component for React.

For detailed documentation, check out the [Wiki](https://github.com/davem1988/custom-login-react/wiki).

## Installation

```sh
npm install custom-login-react
```

or with Yarn:

```sh
yarn add custom-login-react
```

## Usage

```tsx
import React from 'react';
import './App.css';
import { Login } from 'custom-login-react';

function App() {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login =>');
    console.log('Email:', event.currentTarget[0].value);
    console.log('Password:', event.currentTarget[1].value);
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Register =>');
    console.log('Username:', event.currentTarget[0].value);
    console.log('Email:', event.currentTarget[1].value);
    console.log('Password:', event.currentTarget[2].value);
  };

  return (
    <div className="App">
      <Login onLogin={handleLogin} onRegister={handleRegister} />
    </div>
  );
}

export default App;
```

## Props

| Prop         | Type                                                | Description                                             |
| ------------ | --------------------------------------------------- | ------------------------------------------------------- |
| `onLogin`    | `(event: React.FormEvent<HTMLFormElement>) => void` | Callback function triggered on login submission.        |
| `onRegister` | `(event: React.FormEvent<HTMLFormElement>) => void` | Callback function triggered on registration submission. |

## Important Notes

⚠️ **Security Warning**

- The password is received in **plain text**. You must hash it before storing or transmitting it to your backend for security reasons.
- Consider using a library like **bcrypt** or **argon2** to hash passwords before sending them to your server.

## License

This project is licensed under the MIT License.
