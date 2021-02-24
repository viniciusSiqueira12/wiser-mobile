import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(RectButton)` 
`;

export const ButtonText = styled.Text`  
  color: #fafafa;
  font-size: 18px;
`

export const ButtonContainer = styled(LinearGradient)`
  position: absolute;
  width: 168px;
  height: 48px;
  border-radius: 10px;
  bottom: -22px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const TextButton = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px; 
  color: #FFFFFF;
`;