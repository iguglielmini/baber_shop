import React from 'react';
import { Switch, Route } from 'react-router-dom';

// ROutes
import SignIn from '../pages/Signin';
import Register from '../pages/Register';
import Forget from '../pages/Forget'

const Routes: React.FC = () =>(
    <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/register"  component={Register}/>
        <Route path="/forgot"  component={Forget}/>
    </Switch>
);

export default Routes;