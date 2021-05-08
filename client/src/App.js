import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import NotFound from "./components/404/NotFound";
import ProdutList from "./components/products/ProdutList";
import DiseaseList from "./components/disease/DiseaseList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*">
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/product" exact component={ProdutList} />
              <Route path="/disease" exact component={DiseaseList} />

              {/* laslty if route is wrong */}
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
