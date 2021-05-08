import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/authentication/Auth";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/products/ProductList";
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter basename="admin">
        <Switch>
         
          <Route exact path="/" component={Login} />

          <div>
            <Route path="*">
            <Navbar/>
          <Route path="/data" component={Auth} />
          <Route path="/products" component={ProductList} />
            </Route>
          </div>

         
        </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
