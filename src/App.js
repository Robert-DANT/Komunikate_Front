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
import Messenger from "./components/Messenger/Messenger";
//import Messenger from "./components/Messenger/Sliders"ö


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

const App = () => {
  const [userToken, setUserToken] = useState({
    email: "",
    user_role: "",
  });

  useEffect(() => {
    const token = localStorage.token;
    if (token) {
      const decoded = jwt_decode(token);
      setUserToken({
        email: decoded.user.email,
        user_role: decoded.user.user_role,
      });
    }
  }, []);

  console.log(userToken);
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/messages" token={userToken} component={Messenger} />
          <Route exact path="/" component={HeaderBody} />
          <Route path="/register" component={UserSignup} />
          <Route path="/guide" component={Guide} />
          <Route path="/visas" component={Visas} />
          <Route path="/health_insurance" component={HealthInsurance} />
          <Route path="/applications" component={Applications} />
          <Route path="/articles" component={Articles} />
          <Route path="/user_card" token={userToken} component={UserCard} />
          <Route
            path="/user_settings"
            token={userToken}
            component={UserSettings}
          />
          <Route
            exact
            path="/user_home"
            token={userToken}
            component={UserLoggedIn}
          />
          <Route
            path="/user_profile"
            token={userToken}
            component={UserProfile}
          />
          <Route path="/user_login" component={UserLogin} />
        </Switch>

        <FooterBar />
      </div>
    </Router>
  );
};

export default App;
