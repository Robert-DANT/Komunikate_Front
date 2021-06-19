import "./App.css";
import Articles from "./components/Articles/Articles";
import UserCard from "./components/Card/UserCard";
import UserLogin from "./components/LoginPage/UserLogin";
import UserSignup from "./components/LoginPage/UserSignup";

function App() {
  return (
    <div className="App">
      <Articles />
      <UserLogin />
      <UserSignup />
      <UserCard />
    </div>
  );
}

export default App;
