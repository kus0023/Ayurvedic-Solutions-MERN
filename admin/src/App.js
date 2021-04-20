import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nabar from "./components/navbar/Nabar";
import Auth from "./components/authentication/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nabar />
        <Switch>
          <Route path="/admin/" exact component={Auth} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
