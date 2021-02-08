import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/' component={Login} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
