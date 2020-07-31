import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'

import LogoImg from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';
import FadeIn from 'react-fade-in';

const SignIn: React.FC = () => (
    <FadeIn>
        <Container>
            <Content>
                <img src={LogoImg} alt="Go Baber" />
                <form>
                    <h1>Faça seu Loggon</h1>

                    <Input
                        name="email"
                        placeholder="E-mail"
                        icon={FiMail}
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        icon={FiLock}
                    />
                    <Button type="submit">Entrar</Button>

                    <a href="/forgot">Esqueci minha senha</a>
                </form>
                <a href="/register">
                    <FiLogIn />
                    Criar conta</a>
            </Content>
            <Background />

        </Container>
    </FadeIn>
);

export default SignIn;