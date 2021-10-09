import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from '../components/login/Login';
import { Modal } from '../components/Modal/Modal';
import { Navbar } from '../components/Navbar';
import { Register } from '../components/register/Register';
export const AppRouter = () => {
    return (
        <Router>
        <div>
         <Navbar />

          <Switch>
           <Route exact path="/login" component={Login} />
           <Route exact path="/register" component={Register} />
           <Route exact path="/modal" component={Modal} />
          </Switch>
        </div>
      </Router>
    )
}
