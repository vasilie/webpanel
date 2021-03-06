import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Main from '../components/Main';
import ListPage from '../components/ListPage';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import {AuthContext} from '../contexts/AuthContext';

const PrivateRoute = ({component, ...options}) => {
  const {user} = useContext(AuthContext);
  if (user) {
    return <Route {...options} component={component} />;
  } else {
    return <Redirect to="/login" />;
  }
};

const Router = () => {
  const {loading, user} = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <PrivateRoute path="/" component={Header} />
      <PrivateRoute path="/" component={Main} />
      <PrivateRoute path="/" component={Navigation} />
      <PrivateRoute path="/" component={ListPage} />
      {!user && <Route exact path="/login" component={LoginForm} />}
    </div>
  );
};

export default Router;
