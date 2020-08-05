import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    FiMail,
    FiLock,
    FiLogIn,
} from 'react-icons/fi';
import FadeIn from 'react-fade-in';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useForm } from "react-hook-form";
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { AuthService } from '../../../services';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import {
    setUserToken,
    setUserProfile,
} from '../../../redux/actions';

import LogoImg from '../../../assets/logo.svg';

import { Background } from './styles';
import { Content, Container } from '../../../assets/styles/global';

interface TypesResponse {
    status?: Number
    data?: object | undefined | null | any
}

interface PropsResponse {
    id?: string
    name?: string
    error?: string
    email?: string
    status?: Number
    perfil?: string
    avatar?: string
    data?: object | undefined | null | any
    acessToken?: string | undefined | null | any
    response?: TypesResponse | undefined | null | any
}

interface ReduxTypes {
    setUserToken: Function
    setUserProfile: Function
}

const SignIn: React.FC<ReduxTypes> = ({ setUserToken, setUserProfile }: ReduxTypes) => {
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    function submit(values: any) {
        const { email, password } = values;

        setLoading(true);

        AuthService.signIn({ email, password })
            .then((response: PropsResponse) => {
                const data: PropsResponse = response.data;
                const profile = {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    perfil: data.perfil,
                    avatar: data.avatar,
                }
                sessionStorage.setItem('ACCESS_TOKEN', data.acessToken);
                sessionStorage.setItem('PROFILE_USER', JSON.stringify(profile));
                setUserProfile(profile);
                enqueueSnackbar(`Seja Bem Vindo ${data.name}`, { variant: "success" });
                setTimeout(() => setUserToken(data.acessToken), 3000);
            })
            .catch((error: PropsResponse) => {
                setLoading(false);
                const { data } = error.response;
                enqueueSnackbar(data.message, { variant: "warning" });
            });
    }

    return (
        <FadeIn>
            <Container>
                <Content>
                    <img
                        src={LogoImg}
                        alt="Go Barber"
                        draggable={false}
                    />
                    <form onSubmit={handleSubmit(submit)}>
                        <h1>Faça seu Loggon</h1>
                        <Input
                            name="email"
                            type="email"
                            icon={FiMail}
                            errors={errors}
                            placeholder="E-mail"
                            inputRef={register({ required: "E-email não preenchido." })}
                        />
                        <Input
                            icon={FiLock}
                            name="password"
                            type="password"
                            errors={errors}
                            placeholder="Senha"
                            inputRef={register({ required: "Senha não preenchida." })}
                        />
                        <Button
                            type="submit"
                            disabled={loading}
                        >
                            {
                                loading
                                    ? (<CircularProgress size={20} color="inherit" />)
                                    : (<span>Entrar</span>)
                            }
                        </Button>
                        <NavLink to="/forgot">Esqueci minha senha</NavLink>
                    </form>
                    <NavLink to="/register">
                        <FiLogIn />
                        <span>Criar conta</span>
                    </NavLink>
                </Content>
                <Background />
            </Container>
        </FadeIn>
    );
}

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ setUserToken, setUserProfile }, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);