import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { FiPower, FiClock, FiX, FiMenu, FiCalendar, FiSearch } from 'react-icons/fi';

import {
    Header,
    Content,
    Profiler,
    Container,
    CardProvider,
    HeaderContent,
    HistoryAppointment
} from './styles';

import { Logout } from '../../../../helpers';
import Input from '../../../../components/Input';
import logoImg from '../../../../assets/logo.svg';

interface TypesUser {
    name: string
    avatar: string
}

interface TypesUserLoginState {
    user: TypesUser
}

interface ReduxStore {
    userLoginState: TypesUserLoginState
}

const Dashboard: React.FC<TypesUserLoginState> = ({ user }: TypesUserLoginState) => {

    return (
        <Container className="animated">
            <Header>
                <HeaderContent>
                    <input id="open-menu" type="checkbox" />
                    <label className="btn-open-menu" htmlFor="open-menu">
                        <FiMenu />
                    </label>
                    <div className="content-logo-profile">
                        <img
                            src={logoImg}
                            alt="Baber Shop"
                            className="responsive-img"
                        />
                        <NavLink to="/profile">
                            <Profiler>
                                <Avatar
                                    alt={user.name}
                                    src={user.avatar}
                                    className="avatar"
                                />
                                <div>
                                    <span>Bem-vindo</span>

                                    <strong>{user.name}</strong>
                                </div>
                            </Profiler>
                        </NavLink>
                    </div>
                    <nav className="nav-btns">
                        <label className="btn-open-menu" htmlFor="open-menu">
                            <FiX />
                        </label>
                        <img
                            src={logoImg}
                            alt="Baber Shop"
                            className="responsive-img logo"
                        />
                    </nav>

                    <button
                        className="btn-logout"
                        onClick={() => Logout()}
                    >
                        <FiPower />
                    </button>
                </HeaderContent>
            </Header>

            <Content>
                <h1>Barbeiros Disponíveis</h1>
                <p>
                    <span>Hoje</span>
                    <span>dia 04</span>
                    <span>Terça-feira</span>
                </p>
                <div>
                    <CardProvider>
                        <Avatar
                            alt={user.name}
                            src={user.avatar}
                            className="avatar"
                        />
                        <h2>{user.name}</h2>
                        <div>
                            <span>
                                <FiCalendar />
                                Seg à Sab
                            </span>
                            <span>
                                <FiClock />
                                10h às 20h
                            </span>

                        </div>
                    </CardProvider>

                    <CardProvider>
                        <Avatar
                            alt={user.name}
                            src={user.avatar}
                            className="avatar"
                        />
                        <h2>{user.name}</h2>
                        <div>
                            <span>
                                <FiCalendar />
                                Seg à Sab
                            </span>
                            <span>
                                <FiClock />
                                10h às 20h
                            </span>

                        </div>
                    </CardProvider>

                    <CardProvider>
                        <Avatar
                            alt={user.name}
                            src={user.avatar}
                            className="avatar"
                        />
                        <h2>{user.name}</h2>
                        <div>
                            <span>
                                <FiCalendar />
                                Seg à Sab
                            </span>
                            <span>
                                <FiClock />
                                10h às 20h
                            </span>

                        </div>
                    </CardProvider>

                    <CardProvider>
                        <Avatar
                            alt={user.name}
                            src={user.avatar}
                            className="avatar"
                        />
                        <h2>{user.name}</h2>
                        <div>
                            <span>
                                <FiCalendar />
                                Seg à Sab
                            </span>
                            <span>
                                <FiClock />
                                10h às 20h
                            </span>

                        </div>
                    </CardProvider>

                </div>
            </Content>
            <HistoryAppointment>
                <div className="title-appointment">
                    <h1>Históricos de atendimentos</h1>
                    <form>

                        <Input
                            name="name"
                            icon={FiSearch}
                            placeholder="Pesquisar atendimento"
                        />
                        <button type="submit">
                            <FiSearch />
                        </button>
                    </form>
                </div>
                <div>
                    <CardProvider>
                        <Avatar
                            alt={user.name}
                            src={user.avatar}
                            className="avatar"
                        />
                        <h2>{user.name}</h2>
                        <div>
                            <span>
                                <FiClock />
                                16:00
                            </span>
                            <span>
                                <FiCalendar />
                                28/07/20
                            </span>

                        </div>
                    </CardProvider>
                </div>
            </HistoryAppointment>
        </Container>
    );
}

const mapStateToProps = (store: ReduxStore) => ({
    user: store.userLoginState.user,
});

export default connect(mapStateToProps, null)(Dashboard);