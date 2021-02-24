import React, { useRef, useEffect } from 'react';
import { Container, TextInput } from './styles';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';


interface InputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest}) => {
   const inputRef = useRef<any>(null);
   const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);
  
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    })
  }, [fieldName, registerField]);


  return (
  <Container>
    <TextInput
    defaultValue={defaultValue}
    keyboardAppearance="light"
    ref={inputRef}
    onChangeText={(value : any)=> {
      if (inputRef.current) {
        inputRef.current.value = value;
      }
    }}
    placeholderTextColor="#383E71" {...rest }/>
  </Container>
  )
}

export default Input;