import React, {createContext, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import UseLocalStorageState from '../hooks/useLocalStorageState';
import {loginApi, getAuthData} from '../api';
const jwt_decode = require('jwt-decode');

export const AuthContext = createContext();

const initialAuth = {
  user: null,
  loading: true,
};
function AuthProvider({history, children}) {
  const [auth, setAuth] = useState(initialAuth);
  const [token, setToken] = UseLocalStorageState('access_token', null);

  useEffect(() => {
    /* The first time the component is rendered, it tries to
     * fetch the auth data from the localStorage.
     */
    const handleAuth = async () => {
      const currentAuth = await getAuthData();
      if (currentAuth) {
        setAuth(currentAuth);
      }
    };
    handleAuth();
  }, []);

  const login = (username, password) => {
    loginApi({username, password}).then(
      (response) => {
        const {result} = response.data;
        const data = jwt_decode(result);
        const {username, isAdmin} = data;
        const user = {
          name: username,
          role: isAdmin ? 'admin' : '',
        };
        setToken(result);
        setAuth({user, loading: false});
        history.push('/');
      },
      (error) => {
        setAuth({user: null, error: 'Wrong username password', loading: false});
        console.log(error);
      }
    );
  };

  const logout = () => {
    setToken(null);
    setAuth({...initialAuth, loading: false});
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{...auth, setAuth, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}
export default withRouter(AuthProvider);
