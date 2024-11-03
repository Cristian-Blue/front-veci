import React, { createContext, useContext, useState } from 'react';
import Loader from '../components/loader/loader';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [token, setToken] = useState('');
   const [user, setUser] =  useState('');
   const  [active, setActive] = useState(false);

    const login = (token, user) =>{ 
        localStorage.setItem("token" , token)
        setToken(token);
        setUser(user);
        setIsAuthenticated(true)
    };
    const logout = () =>{ 
      localStorage.removeItem("token")
      setIsAuthenticated(false);
    }
    const setLoader = (value) =>{
      setActive(value)
    }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user, setLoader }}>
      {children}      
      {active ? <Loader  />: null}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);