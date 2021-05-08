import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import NotFound from "./components/404/NotFound";
import ProdutList from "./components/products/ProdutList";
import DiseaseList from "./components/disease/DiseaseList";
import ProductDetail from "./components/products/ProductDetail";

//store
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
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
                <Route path="/product/:id" exact component={ProductDetail} />
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
    </Provider>
  );
}

export default App;
