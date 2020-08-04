import React, { useState, useCallback } from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {
    Container,
    Header,
    HeaderContent,
    Profiler,
    Content,
    Schedule,
    NextAppointment,
    Section,
    Appointment,
    Calendar
} from './styles';

import { FiPower, FiClock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';



const Dashboard: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
        if (modifiers.available) {
            setSelectedDate(day);
        }
    }, []);
    return (
        <FadeIn>
            <Container>
                <Header>
                    <HeaderContent>
                        <div className="content-logo-profile">
                            <img src={logoImg} alt="Baber Shop" />

                            <Profiler>
                                <img
                                    src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4"
                                    alt="Italo Guglielmini"
                                />
                                <div>
                                    <span>Bem-vindo</span>
                                    <Link to="/profile">
                                        <strong>Ítalo Guglielmini</strong>
                                    </Link>
                                </div>
                            </Profiler>
                        </div>

                        <div className="nav-btns">
                            <Link to="/agenda">
                                Agenda
                            </Link>
                            <Link to="/agenda">
                                Históricos
                            </Link>
                            <button type="button">
                                <FiPower />
                            </button>
                        </div>
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
                            08:00
                        </span>
                            </div>
                        </NextAppointment>
                        <Section>
                            <strong>Manhã</strong>
                            <Appointment>
                                <span>
                                    <FiClock />
                            08:00
                        </span>
                                <div>
                                    <img src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4" alt="Italo Guglielmini" />
                                    <strong>Italo Guglielmini</strong>
                                </div>
                            </Appointment>
                        </Section>
                        <Section>
                            <strong>Tarde</strong>
                            <Appointment>
                                <span>
                                    <FiClock />
                            16:00
                        </span>
                                <div>
                                    <img src="https://avatars1.githubusercontent.com/u/14861271?s=460&u=2d8801d6fe35d36f884cbb0ff20d845456f237cc&v=4" alt="Isaac Henrique" />
                                    <strong>Isaac Henrique</strong>
                                </div>
                            </Appointment>
                        </Section>
                        <Section>
                            <strong>Noite</strong>

                            <Appointment>
                                <span>
                                    <FiClock />
                            19:00
                        </span>
                                <div>
                                    <img src="https://avatars1.githubusercontent.com/u/55547066?s=460&u=71c3ad6cbfc1a812d33080725131abe6b152935b&v=4" alt="Telson Urtiga" />
                                    <strong>Telson Urtiga</strong>
                                </div>
                            </Appointment>
                        </Section>
                    </Schedule>
                    <Calendar>
                        <DayPicker
                            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
                            fromMonth={new Date()}
                            disabledDays={[{ daysOfWeek: [0, 6] }]}
                            modifiers={{
                                available: { daysOfWeek: [1, 2, 3, 4, 5] }
                            }}
                            selectedDays={selectedDate}
                            onDayClick={handleDateChange}
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
                        />
                    </Calendar>
                </Content>
            </Container>
        </FadeIn>
    );


};
export default Dashboard;