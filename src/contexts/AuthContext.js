import React, {createContext, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import UseLocalStorageState from '../hooks/useLocalStorageState';
import {fetchLogin, getAuthData} from '../api';

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
     * fetch the auth data from a source, like a cookie or
     * the localStorage.
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
    const user = fetchLogin({username, password});
    console.log('USER IN CONTEXT', user);
    if (user) {
      const {access_token} = user;
      setToken(access_token);
      setAuth({user});
      history.push('/');
    }
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
