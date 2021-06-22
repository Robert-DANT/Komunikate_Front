import "./App.css";
import Articles from "./components/Articles/Articles";
import UserCard from "./components/Card/UserCard";
import UserLogin from "./components/LoginPage/UserLogin";
import UserSignup from "./components/LoginPage/UserSignup";
import UserProfile from "./components/UserProfilePage/UserProfile";

function App() {
  return (
    <div className="App">
      <UserProfile />
      <Articles />
      <UserLogin />
      <UserSignup />
      <UserCard />
    </div>
  );
}

export default App;
