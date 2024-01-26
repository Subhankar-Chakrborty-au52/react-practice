import "./App.css";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Logout from "./components/Logout";

function App() {
  const user = useSelector(selectUser);
  return (
    <>
      <div className="App">
        <h1>APPLICATION FORM !</h1>
      </div>
      {user ? <Logout /> : <Login />}
    </>
  );
}

export default App;
