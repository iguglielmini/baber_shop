import React from 'react';
import { Switch, Route } from 'react-router-dom';

// PAGES
import Agenda from './Agenda';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Historico from './Historico';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/historico" component={Historico} />

        <Route path="*" component={Dashboard} />
    </Switch>
);

export default Routes;