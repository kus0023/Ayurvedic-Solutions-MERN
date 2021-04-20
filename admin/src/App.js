import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/authentication/Auth";
import RedirectedToAdmin from "./components/helper/RedirectedToAdmin";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/products/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/admin" exact component={Auth} />
          {/* <Navbar /> */}
          <Route path="/admin/login" component={Login} />
          <Route path="/admin/products" component={Product} />
          <Route path="/" exact component={RedirectedToAdmin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
