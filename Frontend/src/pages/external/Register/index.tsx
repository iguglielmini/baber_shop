import React from 'react';
import {
    FiMail,
    FiLock,
    FiUser,
    FiArrowLeft,
} from 'react-icons/fi';
import FadeIn from 'react-fade-in';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useForm } from "react-hook-form";
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

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
    data?: object
    status?: Number
}

interface PropsResponse {
    id?: string
    erro?: string
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

const Register: React.FC<ReduxTypes> = ({ setUserToken, setUserProfile }: ReduxTypes) => {
    const { enqueueSnackbar } = useSnackbar();
    const { register, handleSubmit, errors, setError } = useForm();

    function submit(values: any) {
        const { name, email, password, confirmpassword } = values;

        if (password !== confirmpassword) {
            setError("password", { type: "error", message: "" });
            setError("confirmpassword", { type: "error", message: "As senhas não conferem." });
            return;
        }

        AuthService
            .signUp({ name, email, password })
            .then((response: PropsResponse) => {
                const data: PropsResponse = response.data;
                const profile = {
                    name,
                    id: data.id,
                    email: data.email,
                    perfil: data.perfil,
                    avatar: data.avatar,
                }
                sessionStorage.setItem('ACCESS_TOKEN', data.acessToken);
                sessionStorage.setItem('PROFILE_USER', JSON.stringify(profile));
                setUserProfile(profile);
                enqueueSnackbar("Cadastro realizado com sucesso.", { variant: "success" });
                setTimeout(() => setUserToken(data.acessToken), 3000);
            })
            .catch((error: PropsResponse) => {
                const { data, status } = error.response;
                if (status === 500) enqueueSnackbar(data.error, { variant: "error" });
                else enqueueSnackbar("Usuário já cadastrado.", { variant: "info" });
            });
    }

    return (
        <FadeIn>
            <Container>
                <Background />
                <Content>
                    <img
                        src={LogoImg}
                        alt="Go Barber"
                        draggable={false}
                    />
                    <form onSubmit={handleSubmit(submit)}>
                        <h1>Faça seu Cadastro</h1>
                        <Input
                            name="name"
                            icon={FiUser}
                            errors={errors}
                            placeholder="Nome"
                            inputRef={register({ required: "Nome não preenchido." })}
                        />
                        <Input
                            name="email"
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
                        <Input
                            icon={FiLock}
                            type="password"
                            errors={errors}
                            name="confirmpassword"
                            placeholder="Confirme sua Senha"
                            inputRef={register({ required: "Confirme sua Senha não preenchido." })}
                        />
                        <Button type="submit">Cadastrar</Button>
                    </form>
                    <NavLink to="/">
                        <FiArrowLeft />
                        <span>Voltar para Loggon</span>
                    </NavLink>
                </Content>
            </Container>
        </FadeIn>
    );
}

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ setUserToken, setUserProfile }, dispatch);

export default connect(null, mapDispatchToProps)(Register);