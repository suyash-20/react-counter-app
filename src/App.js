import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counterReducer);

  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}

export default App;
