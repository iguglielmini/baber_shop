import React from 'react';
import { Switch, Route } from 'react-router-dom';

// PAGES
import Profile from './Profile';
import Dashboard from './Dashboard';
import Appointments from './Appointments';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/profile" component={Profile}/>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/agendamento" component={Appointments}/>

        <Route path="*" component={Dashboard} />
    </Switch>
);

export default Routes;