import React, {
    useState,
    useCallback,
} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { FiPower, FiClock, FiX, FiMenu } from 'react-icons/fi';

import {
    Header,
    Content,
    Section,
    Profiler,
    Schedule,
    Calendar,
    Container,
    Appointment,
    HeaderContent,
    NextAppointment,
} from './styles';

import { Logout } from '../../../../helpers';
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
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
        if (modifiers.available && (day.getDate() >= new Date().getDate())) setSelectedDate(day);
    }, []);

    return (
        <Container className="animate__animated animate__fadeIn">
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
                        <NavLink exact to="/agenda">
                            Agenda
                            </NavLink>
                        <NavLink exact to="/historico">
                            Históricos
                            </NavLink>
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
                <Schedule>
                    <h1>Horários agendados</h1>
                    <p>
                        <span>Hoje</span>
                        <span>dia 30</span>
                        <span>Quinta-feira</span>
                    </p>
                    <NextAppointment>
                        <strong>Atendimento a seguir</strong>
                        <div>
                            <img src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4" alt="Italo Guglielmini" />
                            <strong>Italo Guglielmini</strong>
                            <span>
                                <FiClock />
                                <span>08:00</span>
                            </span>
                        </div>
                    </NextAppointment>
                    <Section>
                        <strong>Manhã</strong>
                        <Appointment>
                            <span>
                                <FiClock />
                                <span>08:00</span>
                            </span>
                            <div>
                                <img src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4" alt="Italo Guglielmini" />
                                <strong>Italo Guglielmini</strong>
                            </div>
                        </Appointment>
                    </Section>
                    <Section>
                        <strong>Manhã</strong>
                        <Appointment>
                            <span>
                                <FiClock />
                                <span>08:00</span>
                            </span>
                            <div>
                                <img src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4" alt="Italo Guglielmini" />
                                <strong>Italo Guglielmini</strong>
                            </div>
                        </Appointment>
                    </Section>
                    <Section>
                        <strong>Manhã</strong>
                        <Appointment>
                            <span>
                                <FiClock />
                                <span>08:00</span>
                            </span>
                            <div>
                                <img src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4" alt="Italo Guglielmini" />
                                <strong>Italo Guglielmini</strong>
                            </div>
                        </Appointment>
                    </Section>
                    <Section>
                        <strong>Manhã</strong>
                        <Appointment>
                            <span>
                                <FiClock />
                                <span>08:00</span>
                            </span>
                            <div>
                                <img src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4" alt="Italo Guglielmini" />
                                <strong>Italo Guglielmini</strong>
                            </div>
                        </Appointment>
                    </Section>
                </Schedule>
                <input id="open-calendar" type="checkbox" />
                <Calendar className="calendar">
                    <label htmlFor="open-calendar" className="open-calendar">
                        <FiClock />
                    </label>
                    <DayPicker
                        months={[
                            'Janeiro',
                            'Fevereiro',
                            'Março',
                            'Abril',
                            'Maio',
                            'Junho',
                            'Julho',
                            'Agosto',
                            'Setembro',
                            'Outubro',
                            'Novembro',
                            'Dezembro',
                        ]}
                        fromMonth={new Date()}
                        disabledDays={[
                            day =>  day < new Date(),
                            {
                                daysOfWeek: [0, 6]
                            }
                        ]}
                        modifiers={{
                            available: { daysOfWeek: [1, 2, 3, 4, 5] }
                        }}
                        selectedDays={selectedDate}
                        onDayClick={handleDateChange}
                        weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
                    />
                </Calendar>
            </Content>
        </Container>
    );
}

const mapStateToProps = (store: ReduxStore) => ({
    user: store.userLoginState.user,
});

export default connect(mapStateToProps, null)(Dashboard);