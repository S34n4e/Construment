import React from 'react';
import {Route, Switch } from "react-router-dom";




//components
import Home from './components/Home/home.js';


const AppRoutes3 = () => (
<Switch>
<Route exact path="/" component={Home} />
</Switch>);
export default AppRoutes3;

