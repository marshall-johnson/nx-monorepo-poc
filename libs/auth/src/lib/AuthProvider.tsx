import { createContext, useContext, useMemo, useState } from 'react';

interface AuthContextType {
  token: string | null;
  isLogin: boolean;
  login: (newToken: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  isLogin: false,
  login: (newToken: string): void => {
    throw new Error('Function not implemented.');
  },
  logout: (): void => {
    throw new Error('Function not implemented.');
  },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem('accessToken')
  );

  const login = (newToken: string) => {
    localStorage.setItem('accessToken', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setToken(null);
  };

  const value = useMemo(
    () => ({ token, login, logout, isLogin: !!token && token.length > 0 }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
