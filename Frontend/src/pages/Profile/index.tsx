import React from 'react'
import { Link } from 'react-router-dom'
import { FiCamera, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import Input from '../../components/Input'
import Button from '../../components/Button'
import FadeIn from 'react-fade-in'


import { Container, Content, AvatarInput } from './styles';

const Profile: React.FC = () => (
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
                        <img
                            src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4"
                            alt="Italo Guglielmini"
                        />
                        <button type="button">
                            <FiCamera />
                        </button>
                    </AvatarInput>

                    <h1>Meu Perfil</h1>

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
                        name="old_password"
                        type="password"
                        placeholder="Senha atual"
                        icon={FiLock}
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Nova senha"
                        icon={FiLock}
                    />
                    <Input
                        name="password_confirmation"
                        type="password"
                        placeholder="Confirmar senha"
                        icon={FiLock}
                    />
                    <Button type="submit">Confirmar Mudança</Button>

                </form>
            </Content>

        </Container>
    </FadeIn>
);

export default Profile;