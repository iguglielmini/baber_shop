import React from 'react';
import { NavLink } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import { FiArrowLeft, FiClock, FiTrash } from 'react-icons/fi'
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import { Container, Content } from './styles';


const Agenda: React.FC = () => {

    return (
        <FadeIn>
            <Container>
                <header>
                    <div>
                        <NavLink to="/dashboard">
                            <FiArrowLeft />
                        </NavLink>
                        <h1>Agenda</h1>
                    </div>
                </header>
            </Container>
            <Content>
                <div className="cad-agenda">
                    <form>
                        <h1>Agenda do Barbeiro</h1>

                        <Input
                            name="name"
                            icon={FiClock}
                            placeholder="Horário de Entrada"
                        />

                        <Input
                            name="name"
                            icon={FiClock}
                            placeholder="Horário de Saída"
                        />
                        <Input
                            name="name"
                            icon={FiClock}
                            placeholder="Saída Almoço"
                        />
                        <Input
                            name="name"
                            icon={FiClock}
                            placeholder="Entrada de Almoço"
                        />
                        <Input
                            name="name"
                            icon={FiClock}
                            placeholder="Tempo de atendimento"
                        />

                        <Button type="submit">Confirmar Agenda</Button>

                    </form>
                </div>
                <div className="agenda-semana">
                    <h1>Agenda da Semana</h1>
                    <div className="horarios-dia">
                        <div className="title-agenda">
                            <strong>Terça-feira</strong>
                            <button type="submit">
                                <FiTrash />
                            </button>
                        </div>
                        <div>
                            <span className="atendimento">
                                <FiClock />
                                <span>08:00</span>
                            </span>
                            <span className="atendimento">
                                <FiClock />
                                <span>09:00</span>
                            </span>
                            <span className="atendimento">
                                <FiClock />
                                <span>10:00</span>
                            </span>
                            <span className="atendimento">
                                <FiClock />
                                <span>11:00</span>
                            </span>
                            <span className="atendimento">
                                <FiClock />
                                <span>13:00</span>
                            </span>
                        </div>
                    </div>

                    <div className="horarios-dia">
                        <div className="title-agenda">
                            <strong>Quarta-feira</strong>
                            <button type="submit">
                                <FiTrash />
                            </button>
                        </div>
                        <div>
                            <span className="atendimento">
                                <FiClock />
                                <span>08:00</span>
                            </span>
                            <span className="atendimento">
                                <FiClock />
                                <span>09:00</span>
                            </span>
                            <span className="atendimento">
                                <FiClock />
                                <span>10:00</span>
                            </span>
                            <span className="atendimento">
                                <FiClock />
                                <span>11:00</span>
                            </span>
                            <span className="atendimento">
                                <FiClock />
                                <span>13:00</span>
                            </span>
                        </div>
                    </div>
                </div>
            </Content>

        </FadeIn>
    )
}

export default Agenda;