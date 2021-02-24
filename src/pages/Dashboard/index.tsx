import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Text, Name } from './styles';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { usuario, signOut } = useAuth();
  return (
    <Container>
      <Text> Sja bem-vindo(a) </Text>
      <Name> {usuario.Nome} </Name>
      <TouchableOpacity onPress={signOut}>
        <Text> Sair </Text>
      </TouchableOpacity>
    </Container>
  )
}

export default Dashboard;