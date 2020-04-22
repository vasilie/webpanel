import React from 'react';

import './App.css';
import "./scss/main.scss";
import AuthProvider from './contexts/AuthContext';
import {BrowserRouter} from 'react-router-dom';
import Router from './components/Router';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
