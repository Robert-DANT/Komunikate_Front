import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import HeaderBody from "./components/HeaderSection/HeaderBody";
// import FooterBar from "./components/Footer/FooterBar";
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
import SingleArticle from "./components/ArticlePage/ArticleTemp";
import LandingBanner from "./components/LandingBanner/LandingBanner";
//import Messenger from "./components/Messenger/Sliders"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import AdminPanel from "./components/AdminPanel/AdminPanel";

const App = () => {
  const [userToken, setUserToken] = useState({
    email: "",
    user_role: "",
    admin: "",
  });
  const [jwt, setJwt] = useState("");

  let location = useLocation();

  useEffect(() => {
    let token = localStorage.token;
    if (token) {
      const decoded = jwt_decode(token);
      setUserToken({
        first_name: decoded.user.first_name,
        last_name: decoded.user.last_name,
        username: decoded.user.username,
        email: decoded.user.email,
        user_role: decoded.user.user_role,
        id: decoded.user._id,
        admin: decoded.user.admin,
      });
    }
  }, [jwt]);

  return (
    <Router>
      <div className="App">
        {location.pathname.toLowerCase() !== "/adminpanel" && (
          <NavBar userToken={userToken} setJwt={setJwt} />
        )}

        <Switch>
          <Route path="/adminpanel" token={userToken} component={AdminPanel} />
          <Route path="/messages" token={userToken} component={Messenger} />
          <Route
            exact
            path="/"
            token={userToken}
            component={userToken.user_role === "" ? HeaderBody : UserLoggedIn}
          />
          {/* User Registration and Login Routes */}
          <Route path="/register" component={UserSignup} />
          <Route path="/user_login">
            <UserLogin setJwt={setJwt} />
          </Route>
          {/* User Related Routes */}
          <Route path="/user_settings">
            <UserSettings token={userToken} />
          </Route>
          <Route
            path="/user_profile/:id?"
            token={userToken}
            component={UserProfile}
          />
          <Route path="/users/:id" token={userToken} component={UserCard} />

          {/* Routes for major Topics */}
          <Route path="/guide" component={Guide} />
          <Route path="/visas" component={Visas} />
          <Route path="/healthinsurance" component={HealthInsurance} />
          <Route path="/applications" component={Applications} />

          <Route path="/articles/article/:id" component={SingleArticle} />

          <Route path="/articles/:topic?" component={Articles} />

          {/* Add all Routes above, Below is redirect for non existent paths */}
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>

        {/* Needs Restyling */}
        {/* <FooterBar /> */}
        {/* <FooterBar className="stickyFooter" /> */}
      </div>
    </Router>
  );
};

export default App;
