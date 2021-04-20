import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/authentication/Auth";
import RedirectedToAdmin from "./components/helper/RedirectedToAdmin";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/admin" exact component={Auth} />
          <Route path="/admin/login" component={Login} />
          <Route path="/" exact component={RedirectedToAdmin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
