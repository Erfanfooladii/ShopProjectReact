import { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginPage = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://kaaryar-ecom.liara.run/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      console.log(data);
      localStorage.setItem('token', data.token);
      setAuth(true);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login __global-container">
      <form className="login__form" onSubmit={handleForm}>
        <h2 className="login__title">Login Form</h2>
        <input
          className="login__input-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="login__input-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login__form-button">Login</button>
      </form>
      <Link to="/register" className="login__link-register">
        Register Account
      </Link>
    </div>
  );
};
LoginPage.propTypes = {
  setAuth: PropTypes.func.isRequired,
};
export default LoginPage;
