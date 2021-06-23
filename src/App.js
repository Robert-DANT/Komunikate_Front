import "./App.css";
import Articles from "./components/Articles/Articles";
import UserCard from "./components/Card/UserCard";
import UserLoggedIn from "./components/LogedInLandingPage/UserLoggedin";
import UserLogin from "./components/LoginPage/UserLogin";
import UserSignup from "./components/LoginPage/UserSignup";
import UserProfile from "./components/UserProfilePage/UserProfile";
import UserSettings from "./components/UserSettings/UserSettings";

function App() {
  return (
    <div className="App">
      <UserSettings />
      <UserLoggedIn />
      <UserProfile />
      <Articles />
      <UserLogin />
      <UserSignup />
      <UserCard />
    </div>
  );
}

export default App;
