import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface AuthState {
  token: string;
  usuario: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  usuario: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface User {
  Nome: string;
  Email: string;
  DataCriacao: Date;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, usuario] = await AsyncStorage.multiGet([
        '@Wiser:token', '@Wiser:user']);

      if (token[1] && usuario[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`
        setData({ token: token[1], usuario: JSON.parse(usuario[1]) })
      }
      setLoading(false);
    }
    loadStorageData();
  }, [])


  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('acesso/autenticar', {
      Email: email,
      Senha: password
    });

    const { token, usuario } = response.data;
    await AsyncStorage.multiSet([
      ['@Wiser:token', token],
      ['@Wiser:user', JSON.stringify(usuario)]
    ]);

    setData({ token, usuario });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@Wiser:token',
      '@Wiser:user'
    ]);

    setData({} as AuthState);
  }, [])

  return (
    <AuthContext.Provider value={{ usuario: data.usuario, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be use within in AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
