import React, { useRef, useCallback, useState } from 'react';

import {
  Container, Content, Header, Title, Description, FormContainer,
  ImageHeader, ImageFooter, Label, ContainerBackground, Bottom, TextBottom
} from './styles';
import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Image1 from '../../assets/images/shutterstock_12208099181.png';
import Image2 from '../../assets/images/Rectangle15.png';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/auth';
import Toast from 'react-native-toast-message';
import RootToast from '../../components/Toast';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import * as Yup from 'yup';
import getValidationErros from '../../utils/getValidationErros';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn } = useAuth();

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    setLoading(true);
    try {

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password
      });
      setLoading(false);
    }
    catch (err) {
      setLoading(false);
      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);

        formRef.current?.setErrors(errors);
        return
      }
  
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Erro ao fazer o login!',
        text2: 'O email ou senha estão incorretos',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 200,
        bottomOffset: 40,
      });
    }
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <ContainerBackground colors={['#130525', '#693999']} start={{ x: 0.8, y: 0.1 }}>
            <ImageHeader source={Image1} />
            <RootToast />
            <ImageFooter source={Image2} />
          </ContainerBackground>
          <Content>
            <Header>
              <Title> Olá, Seja bem vindo!</Title>
            </Header>
            <Description>
              Para acessar a plataforma, faça seu login.
          </Description>
            <FormContainer>
              <Form ref={formRef} onSubmit={handleSignIn}>
                <Label> EMAIL </Label>
                <Input name="email" placeholder="user.name@gmail.com" autoCorrect={false} autoCapitalize="none" />
                <Label> SENHA </Label>
                <Input name="password" placeholder="*******" secureTextEntry autoCorrect={false} autoCapitalize="none" />
              </Form>
            </FormContainer>
            <Button onPress={() => formRef.current?.submitForm()} isLoading={loading}>
              ENTRAR
            </Button>
          </Content>
          <Bottom>
            <TextBottom> Esqueceu seu login ou senha? Clique aqui </TextBottom>
          </Bottom>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login;