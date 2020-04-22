import React, {useContext} from 'react';
import './Navigation.scss';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/list">Lista korisnika</Link>
        </li>
        <li className="disabled">
          <Link to="/">Lista Admina</Link>
        </li>
        <li className="disabled">
          <Link to="/">Statistika</Link>
        </li>
        <li className="disabled">
          <Link to="/">Analitika</Link>
        </li>
        <li className="disabled">
          <Link to="/">Notifikacije</Link>
        </li>
        <li className="disabled">
          <Link to="/">Podesavanja</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
