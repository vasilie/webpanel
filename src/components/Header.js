import React, {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import './Header.scss';
function Header(props) {
  const {user} = useContext(AuthContext);

  return (
    <div className="header">
      <img src="./assets/img/logo2x.png" alt="Logo" />
      <p className="user-name">Hi {user.name}</p>
    </div>
  );
}

export default Header;
