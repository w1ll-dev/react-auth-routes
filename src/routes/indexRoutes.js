import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoutes";
import Private from "../views/private";
import Login from "../views/login";

const Routes = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute path="/private" component={Private} />
        </Switch>
    </BrowserRouter>

export default Routes