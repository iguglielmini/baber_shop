import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import SignIn from '../pages/Signin';
import Forget from '../pages/Forget';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () =>(
    <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/register"  component={Register}/>
        <Route path="/forgot"  component={Forget}/>
        <Route path="/dashboard"  component={Dashboard}/>
        <Route path="/profile"  component={Profile}/>
    </Switch>
);

export default Routes;