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

const Appointments: React.FC<TypesUserLoginState> = ({ user }: TypesUserLoginState) => {

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
                <h2>Agendamento</h2>
            </Content>
        </Container>
    );
}

const mapStateToProps = (store: ReduxStore) => ({
    user: store.userLoginState.user,
});

export default connect(mapStateToProps, null)(Appointments);