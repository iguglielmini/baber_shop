import React from 'react';
import { NavLink } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import { FiArrowLeft, FiSearch, FiCalendar } from 'react-icons/fi'

import { Container, Content, HistoryContent } from './styles';
import Input from '../../../../components/Input';

const Historico: React.FC = () => {

    return (
        <FadeIn>
            <Container>
                <header>
                    <div>
                        <NavLink to="/dashboard">
                            <FiArrowLeft />
                        </NavLink>
                        <h1>Histórico</h1>
                    </div>
                </header>
            </Container>
            <Content>
                <form>
                    <Input
                        name="name"
                        icon={FiSearch}
                        placeholder="Pesquisar cliente"
                    />
                    <button type="submit">
                        <FiSearch />
                    </button>
                </form>
            </Content>
            <HistoryContent>
                <strong>Histórico de Atendimento</strong>
                <div className="hist-atendimento">
                    <div>
                        <img
                            src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4"
                            alt="Italo Guglielmini"
                        />
                        <strong>Italo Guglielmini</strong>
                        <div>
                            <FiCalendar />
                            <div className="date-time-client">
                                <span className="hour">08:00</span>
                                <span className="date">04/08/2020</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img
                            src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4"
                            alt="Italo Guglielmini"
                        />
                        <strong>Italo Guglielmini</strong>
                        <div>
                            <FiCalendar />
                            <div className="date-time-client">
                                <span className="hour">12:00</span>
                                <span className="date">01/08/2020</span>
                            </div>
                        </div>
                    </div>

                    
                    <div>
                        <img
                            src="https://avatars2.githubusercontent.com/u/40302558?s=460&u=7f200d54b1e5537ad66dddaafa277c29f2bdcc2c&v=4"
                            alt="Italo Guglielmini"
                        />
                        <strong>Italo Guglielmini</strong>
                        <div>
                            <FiCalendar />
                            <div className="date-time-client">
                                <span className="hour">08:00</span>
                                <span className="date">04/08/2020</span>
                            </div>
                        </div>
                    </div>
                </div>

            </HistoryContent>
        </FadeIn>

    )
}

export default Historico;