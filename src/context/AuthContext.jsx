import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('rabbithole_user');
    return saved ? JSON.parse(saved) : {
      id: 'usr-4819',
      name: 'Alex Mercer',
      email: 'alex.mercer@curiosity.io',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'Curiosity Explorer',
      isLoggedIn: true
    };
  });

  const login = (email, password) => {
    const fakeUser = {
      id: 'usr-' + Math.floor(Math.random() * 10000),
      name: email.split('@')[0].replace('.', ' ') || 'Voyager',
      email: email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'Curiosity Explorer',
      isLoggedIn: true
    };
    setUser(fakeUser);
    localStorage.setItem('rabbithole_user', JSON.stringify(fakeUser));
    return true;
  };

  const signup = (name, email, password) => {
    const newUser = {
      id: 'usr-' + Math.floor(Math.random() * 10000),
      name: name || 'Curious Voyager',
      email: email,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      role: 'Curiosity Voyager',
      isLoggedIn: true
    };
    setUser(newUser);
    localStorage.setItem('rabbithole_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser({ isLoggedIn: false });
    localStorage.removeItem('rabbithole_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
