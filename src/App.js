import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const person = {
    username: '',
    password: ''
  }

  const [user, setUser] = useState({username: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.username === details.password) {
      console.log('Please try again, password cannot be the same as username');
      setError('Please try again, password cannot be the same as username')
    } else {
      console.log('You are logged in successfully')
      setUser({
        username: details.username
      });
    }
  }

  const Logout = () => {
    setUser({ username: "" });
  }

  return (
    <div className="App">
      {(user.username !== "") ? (
        <div>
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
          <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
