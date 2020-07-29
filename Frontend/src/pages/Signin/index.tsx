import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import LogoImg from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={LogoImg} alt="Go Baber" />
            <form>
                <h1>Faça seu Loggon</h1>

                <input placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>

                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="register">
                <FiLogIn />
                    Criar conta</a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;