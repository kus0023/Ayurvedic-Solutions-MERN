import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import NotFound from "./components/404/NotFound";
import ProductList from "./components/products/ProductList";
import DiseaseList from "./components/disease/DiseaseList";
import ProductDetail from "./components/products/ProductDetail";

//store
import { Provider } from "react-redux";
import store from "./redux/Store";
import AuthProvider from "./utils/provider/AuthProvider";
import DiseaseDetail from "./components/disease/DiseaseDetail";

function App() {
  //It removes all the console message when in production
  //So that user can't see log messages
  if (process.env.REACT_APP_STAGE === "PROD")
    console.log = function no_console() {};

  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*">
              <div>
                <Navbar />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/product" exact component={ProductList} />
                  <Route path="/product/:id" exact component={ProductDetail} />
                  <Route path="/disease" exact component={DiseaseList} />
                  <Route path="/disease/:id" exact component={DiseaseDetail} />

                  {/* laslty if route is wrong */}
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
