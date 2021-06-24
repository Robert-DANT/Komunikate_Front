import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import HeaderBody from "./components/HeaderSection/HeaderBody";
import FooterBar from "./components/Footer/footerBar";
import Guide from "./components/Routes/Guide";
import Visas from "./components/Routes/Visas.js";
import HealthInsurance from "./components/Routes/HealthInsurance";
import Applications from "./components/Routes/Applications";
import Articles from "./components/Articles/Articles";
import UserCard from "./components/Card/UserCard";
import UserLoggedIn from "./components/LoggedInLandingPage/UserLoggedin";
import UserLogin from "./components/LoginPage/UserLogin";
import UserSignup from "./components/LoginPage/UserSignup";
import UserProfile from "./components/UserProfilePage/UserProfile";
import UserSettings from "./components/UserSettings/UserSettings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

const App = () => {
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    const token = localStorage.usertoken;
    if (token) {
      const decoded = jwt_decode(token);
      setUserToken({
        email: decoded.email,
        password: decoded.password,
        role: decoded.role,
      });
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={HeaderBody} />
          <Route exact path="/register" component={UserSignup} />
          <Route path="/guide" component={Guide} />
          <Route exact path="/visas" component={Visas} />
          <Route path="/healthInsurance" component={HealthInsurance} />
          <Route path="/applications" component={Applications} />
        </Switch>

        <Articles />
        <UserCard />
        <UserSettings />
        <UserLoggedIn />
        <UserProfile />
        <UserLogin />

        <FooterBar />
      </div>
    </Router>
  );
};

export default App;
