import React from 'react';
import FadeIn from 'react-fade-in';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import {
    FiMail,
    FiLock,
    FiUser,
    FiCamera,
    FiArrowLeft,
} from 'react-icons/fi';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';


import { Container, Content, AvatarInput } from './styles';

interface TypesUser {
    name: string
    avatar: string
}

interface TypesUserLoginState {
    user?: TypesUser | any
}

interface ReduxStore {
    userLoginState: TypesUserLoginState
}

const Profile: React.FC<TypesUserLoginState> = ({ user }: TypesUserLoginState) => (
    <FadeIn>
        <Container>
            <header>
                <div>
                    <Link to="/dashboard">
                        <FiArrowLeft />
                    </Link>
                </div>
            </header>
            <Content>
                <form>
                    <AvatarInput>
                        <Avatar
                            alt={user.name}
                            src={user.avatar}
                            className="avatar"
                        />
                        <button type="button">
                            <FiCamera />
                        </button>
                    </AvatarInput>

                    <h1>Meu Perfil</h1>

                    <Input
                        name="name"
                        icon={FiUser}
                        placeholder="Nome"
                        defaultValue={user.name}
                    />
                    <Input
                        name="email"
                        icon={FiMail}
                        placeholder="E-mail"
                        defaultValue={user.email}
                    />
                    <Input
                        icon={FiLock}
                        type="password"
                        name="old_password"
                        placeholder="Senha atual"
                    />
                    <Input
                        icon={FiLock}
                        name="password"
                        type="password"
                        placeholder="Nova senha"
                    />
                    <Input
                        icon={FiLock}
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirmar senha"
                    />
                    <Button type="submit">Confirmar Mudança</Button>
                </form>
            </Content>
        </Container>
    </FadeIn>
);

const mapStateToProps = (store: ReduxStore) => ({
    user: store.userLoginState.user,
});

export default connect(mapStateToProps, null)(Profile);