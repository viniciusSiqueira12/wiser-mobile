import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Container, TextInput, ErrorMessage } from './styles';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';


interface InputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest}) => {
   const inputRef = useRef<any>(null);
   const { fieldName, registerField, defaultValue, error } = useField(name);
   const [isFocused, setIsFocused ] = useState<boolean>(false);
   const [isFilled, setIsFilled ] = useState<boolean>(false);

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

  const handleInputBlur = useCallback(() =>{
    setIsFocused(false); 
    
    setIsFilled(!!inputRef.current.value); 
  }, []) 



  return (
  <>
    <Container isFilled={isFilled} isFocused={isFocused} isErrored={!!error}>
      <TextInput
      onFocus={() => setIsFocused(true)}
      onBlur={handleInputBlur}
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
    { error &&
    <ErrorMessage> { error }</ErrorMessage>
     }
  </>
  )
}

export default Input;