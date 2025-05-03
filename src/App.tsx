import "./App.css";
import Counter from "./components/counter/Counter";
import Greeting from "./components/greeting/Greeting";
import UserProfile from "./components/userProfile/UserProfile";

function App() {
  return (
    <>
      <Greeting name={"Khaldoon"} />
      <Counter />
      <UserProfile userId={4} />
    </>
  );
}

export default App;
