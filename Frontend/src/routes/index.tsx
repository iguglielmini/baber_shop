import React from 'react';
import { Switch, Route } from 'react-router-dom';

// ROutes
import SignIn from '../pages/Signin';
import Register from '../pages/Register';
import Forget from '../pages/Forget';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () =>(
    <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/register"  component={Register}/>
        <Route path="/forgot"  component={Forget}/>
        <Route path="/dashboard"  component={Dashboard}/>
    </Switch>
);

export default Routes;