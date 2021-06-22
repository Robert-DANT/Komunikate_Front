import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navigation/navBar';
import MainBody from './components/main/mainBody';
import FooterBar from './components/footer/footerBar';
import Guide from './components/Routes/guide';
import Visas from './components/Routes/visas.js';
import HealthInsurance from './components/Routes/healthInsurance';
import Applications from './components/Routes/applications';
import Forums from './components/Routes/forums';
import UserPage from './userPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {

  return (
      <Router>
        <div>
          <NavBar />

          <Switch>
          <Route path="/user" component={UserPage} />
          <Route exact path="/home" component={MainBody} />
          <Route path="/guide" component={Guide} />
          <Route exact path="/visas" component={Visas} />
          <Route path="/healthInsurance" component={HealthInsurance} />
          <Route path="/applications" component={Applications} />
          <Route path="/forums" component={Forums} />
          </Switch>

          <FooterBar />

        </div>
      </Router>
  );
}

export default App;
