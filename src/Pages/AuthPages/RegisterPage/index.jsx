import { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RegisterPage = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        'https://kaaryar-ecom.liara.run/v1/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            name,
          }),
        },
      );
      const data = await res.json();
      localStorage.setItem('token', data.token);
      setAuth(true);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="register __global-container">
      <form className="register__form" onSubmit={handleForm}>
        <h2 className="register__title">Create Account</h2>
        <input
          className="register__input-password"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="register__input-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="register__input-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="register__form-button">Create Account</button>
      </form>
      <Link to="/login" className="register__link-register">
        Login Account
      </Link>
    </div>
  );
};
RegisterPage.propTypes = {
  setAuth: PropTypes.func.isRequired,
};
export default RegisterPage;
