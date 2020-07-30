import React from 'react';
import { 
    Container,
     Header, 
     HeaderContent,
     Profiler, 
     Content, 
     Schedule, 
     NextAppointment,
    Calendar } from './styles';

import { FiPower, FiClock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
    <Container>
        <Header>
            <HeaderContent>
                <img src={logoImg} alt="Baber Shop" />

                <Profiler>
                    <img src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4" alt="Italo Guglielmini" />
                    <div>
                        <span>Bem-vindo</span>
                        <strong>Ítalo Guglielmini</strong>
                    </div>
                </Profiler>

                <button type="button">
                    <FiPower />
                </button>

            </HeaderContent>
        </Header>

        <Content>
            <Schedule>
                <h1>Horários agendados</h1>
                <p>
                    <span>Hoje</span>
                    <span>Dia 30</span>
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
            </Schedule>
            <Calendar />
        </Content>
    </Container>

);
export default Dashboard;