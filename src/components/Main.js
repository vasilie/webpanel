import React, {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import Navigation from '../components/Navigation';
import './Main.scss';
function Main() {
  const {logout} = useContext(AuthContext);
  return (
    <div className="main">
      <div>
        <p>Welcome!</p>
        <br />
        <input type="button" value="Logout" onClick={logout} />
      </div>
    </div>
  );
}

export default Main;
