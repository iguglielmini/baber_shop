import React from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'

import LogoImg from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={LogoImg} alt="Go Baber" />
            <form>
                <h1>Esqueceu a senha?</h1>

                <Input
                    name="email"
                    placeholder="E-mail"
                    icon={FiMail}
                />
                <Button type="submit">Resgatar Senha</Button>

            </form>
            <a href="/register">
                <FiArrowLeft />
                    Voltar para Loggon</a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;