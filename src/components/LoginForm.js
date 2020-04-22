import React, {useContext} from 'react';

import useFormState from '../hooks/useFormState';
import './LoginForm.scss';
import {AuthContext} from '../contexts/AuthContext';

function LoginForm(props) {
  const {user, login} = useContext(AuthContext);
  console.log('USER', user);
  const [name, setName, resetName] = useFormState('');
  const [password, setPassword, resetPassword] = useFormState('');
  return (
    <div className="login-form">
      <img className="logo" src="/assets/img/logo2x.png" alt="logo" />
      <p className="info">Admin panel</p>
      <div className="login-form--inputs">
        <h4 className="form-heading ">Prijavite se</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(name, password);
          }}
        >
          <label className="form-field-label" htmlFor="username">
            Korisničko ime
          </label>
          <input
            className="form-text-field "
            name="username"
            type="text"
            placeholder="Unesite korisničko ime"
            value={name}
            onChange={setName}
          />
          <label className="form-field-label" htmlFor="password">
            Šifra
          </label>
          <input
            className="form-password-field "
            type="password"
            name="password"
            placeholder="Unesite šifru"
            value={password}
            onChange={setPassword}
          />
          <a href="/" className="forgot-password">
            Zaboravili ste šifru?
          </a>
          <div className="center">
            <input className="form-button" type="submit" value="Uloguj se" />
          </div>
          {/* <p>Nemate nalog?</p> */}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
