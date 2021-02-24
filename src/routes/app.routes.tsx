import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard'; 
 
const App = createStackNavigator();  


const AppRoutes: React.FC = () => (
  <App.Navigator>
    <App.Screen name="Dashboard" options={{
      headerShown: false,
    }} component={Dashboard} /> 
  </App.Navigator>
);

export default AppRoutes;
