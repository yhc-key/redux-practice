import { Fragment } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import Counter from "./components/Counter";


function App() {

  return (
    <Fragment>
      <SignIn />
      <Counter />
    </Fragment>
  );
}

export default App;
