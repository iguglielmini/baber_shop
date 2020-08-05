import React from 'react';
import {
    FiMail,
    FiArrowLeft,
} from 'react-icons/fi';
import FadeIn from 'react-fade-in';
import { NavLink } from 'react-router-dom';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import LogoImg from '../../../assets/logo.svg';

import { Background } from './styles';
import { Content, Container } from '../../../assets/styles/global';

const Forgot: React.FC = () => (
    <FadeIn>
        <Container>
            <Content>
                <img
                    src={LogoImg}
                    alt="Go Barber"
                    draggable={false}
                />
                <form>
                    <h1>Esqueceu a senha?</h1>
                    <Input
                        name="email"
                        icon={FiMail}
                        placeholder="E-mail"
                    />
                    <Button type="submit">Resgatar Senha</Button>
                </form>
                <NavLink to="/">
                    <FiArrowLeft />
                    <span>Voltar para Loggon</span>
                </NavLink>
            </Content>
            <Background />
        </Container>
    </FadeIn>
);

export default Forgot;