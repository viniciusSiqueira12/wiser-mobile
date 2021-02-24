import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { usuario, loading } = useAuth();
  if(loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#570D6E" />
      </View>
    )
  }
  return !usuario ? <AuthRoutes /> :  <AppRoutes />
}

export default Routes;
