import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Base from "./components/products/addproduct/Base";
import Auth from "./components/authentication/Auth";
import Home from "./components/home/Home";
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
          <Route exact path="/login" component={Login} />
          <div>
            <Route path="*">
            <Navbar/>
      
          <Route path="/" exact  ><Home Cmp={Auth}/></Route>
          <Route path="/products/add"><Home Cmp={Base}/></Route>
          <Route exact path="/products"><Home Cmp={ProductList}/></Route>
          
     
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
