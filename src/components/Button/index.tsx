import React from 'react';
import { Container, ButtonText, ButtonContainer} from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';

interface ButtonProps extends RectButtonProperties {
  children: string;
  isLoading: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...rest }) => (
  <ButtonContainer colors={['#383E71', '#9D25B0']} start={{ x: 0.8, y: 0.1}}> 
  <Container { ...rest } enabled={!isLoading}> 
    {
      !isLoading ? 
      <ButtonText>
        { children }
      </ButtonText> :
      <ActivityIndicator size="small" color="#FFFFFF"/>
    } 
  </Container>
  </ButtonContainer> 
) 

export default Button;