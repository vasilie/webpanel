import React, {useContext} from 'react';
import './Navigation.scss';
import {Link} from 'react-router-dom';
import {
  UsersIcon,
  AdminsIcon,
  StatsIcon,
  AnaliticsIcon,
  NotificationsIcon,
  SettingsIcon,
} from './Icons';

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li className="navigation-item">
          <UsersIcon />
          <Link to="/list">Lista korisnika</Link>
        </li>
        <li className="navigation-item disabled">
          <AdminsIcon />
          <Link to="/">Lista Admina</Link>
        </li>
        <li className="navigation-item disabled">
          <StatsIcon />
          <Link to="/">Statistika</Link>
        </li>
        <li className="navigation-item disabled">
          <AnaliticsIcon />
          <Link to="/">Analitika</Link>
        </li>
        <li className="navigation-item disabled">
          <NotificationsIcon />
          <Link to="/">Notifikacije</Link>
        </li>
        <li className="navigation-item disabled">
          <SettingsIcon />
          <Link to="/">Podesavanja</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
