import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginApi } from '../api/auth.api';

type User = {
  id?: string;
  name: string;
  email: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isBootstrapping: boolean;
  authLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: async () => {},
  logout: async () => {},
  isBootstrapping: true,
  authLoading: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    bootstrap();
  }, []);

  const bootstrap = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const userData = await AsyncStorage.getItem('user');

      if (token && userData) {
        setIsLoggedIn(true);
        setUser(JSON.parse(userData));
      }
    } finally {
      setIsBootstrapping(false);
    }
  };

  const login = async (email: string, password: string) => {
    if (authLoading) return;

    try {
      setAuthLoading(true);

      const response = await loginApi(email, password);

      await AsyncStorage.setItem('accessToken', response.accessToken);
      await AsyncStorage.setItem('user', JSON.stringify(response.user));

      setUser(response.user);
      setIsLoggedIn(true);
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        'Login failed. Please try again.';

      
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.multiRemove(['accessToken', 'user']);
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
        isBootstrapping,
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
