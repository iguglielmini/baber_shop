import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'

import LogoImg from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';

const Register: React.FC = () => (
    <Container>
         <Background />
        <Content>
            <img src={LogoImg} alt="Go Baber" />
            <form>
                <h1>Faça seu Cadastro</h1>

                <Input
                    name="name"
                    placeholder="Nome"
                    icon={FiUser}
                /> 
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
                <Button type="submit">Cadastrar</Button>

            </form>
            <a href="/">
                <FiArrowLeft />
                    Voltar para Loggon</a>
        </Content>
       
    </Container>
);

export default Register;