import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nabar from "./components/navbar/Nabar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nabar />
        <Switch></Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
