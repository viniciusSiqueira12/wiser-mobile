import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export const ContainerBackground = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ImageHeader = styled.Image`
  position: absolute;
  width: 100%;
  height: 60%;
  top: 0px;
`;

export const ImageFooter = styled.Image`
  position: absolute;
  width: 100%;
  height: 40%;
  bottom: 0px;
`;

export const Content = styled.View`
  background-color:  #FAF5FF;
  border-radius: 16px;
  width: 362px;
  height: 482px;
  padding: 30px; 
  /* left: 32px;
  top: 139px; */
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  width: 139px;
  height: 64px;
  align-self: center;
`;

export const SubHeader = styled.View`
  justify-content: center;
  align-items: center;
  width: 139px;
  height: 64px;
`;

export const Title = styled.Text`
 /* font-family: Montserrat; */
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  text-align: center;
  color: #383E71;
`;

export const Description = styled.Text`
 /* font-family: Montserrat; */
 font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  margin-top: 14px; 

  text-align: center;

  color: #989FDB;
`;
 

export const Label = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 48px; 
  display: flex;
  align-items: center; 
  color: #383E71;
  margin-left: 10px;
`;

export const FormContainer = styled.View`
  justify-content: center;
  margin-top: 40px;  
`;

export const Bottom = styled.View`
  width: 212px;
  height: 40px;
  position: absolute;
  bottom: 80px;
`;

export const TextBottom = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px; 
  text-align: center; 
  color: #FFFFFF;
`;
