import React from 'react';
import { Switch, Route } from 'react-router-dom';

// PAGES
import Forgot from './Forgot';
import SignIn from './SignIn';
import Register from './Register';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/register" component={Register} />

        <Route path="*" component={SignIn} />
    </Switch>
);

export default Routes;