import styled, { css } from 'styled-components/native'; 

export interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const TextInput = styled.TextInput` 
  color: #383E71;
  font-size: 16px;
`;

export const ErrorMessage = styled.Text` 
  color: #FF377F;
  font-size: 14px;
`; 

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border: 2px solid #D8D8D8;
  border-width: 0.4px;
  border-radius: 10px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
  ${props => props.isErrored && css`border: 2px solid #FF377F` };

  ${props => props.isFocused && css`border-color: #9D25B0` };

`;

