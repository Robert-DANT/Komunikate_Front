import React from 'react';
import "./App.css";
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

import Articles from "./components/Articles/Articles";
import UserCard from "./components/Card/UserCard";
import UserLoggedIn from "./components/LogedInLandingPage/UserLoggedin";
import UserLogin from "./components/LoginPage/UserLogin";
import UserSignup from "./components/LoginPage/UserSignup";
import UserProfile from "./components/UserProfilePage/UserProfile";
import UserSettings from "./components/UserSettings/UserSettings";

const App = () => {
  return (

    <Router>
      <div className="App">

        <NavBar />

        <Switch>
          <Route exact path="/home" component={MainBody} />
          <Route path="/guide" component={Guide} />
          <Route exact path="/visas" component={Visas} />
          <Route path="/healthInsurance" component={HealthInsurance} />
          <Route path="/applications" component={Applications} />
          <Route path="/forums" component={Forums} />
          
        </Switch>

        <Articles />
        <UserCard />
        <UserSettings />
        <UserLoggedIn />
        <UserProfile />
        <UserLogin />
        <UserSignup />

        <FooterBar />

      </div>
    </Router>
  );
}

export default App;
