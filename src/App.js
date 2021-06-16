import "./App.css";
import UserCard from "./components/Card/UserCard";
import UserLogin from "./components/LoginPage/UserLogin";

function App() {
  return (
    <div className="App">
      <UserLogin />
      <UserCard />
    </div>
  );
}

export default App;
