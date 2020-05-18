import React from "react";

// import Login from "./components/accounts/Login";
// import Register from "./components/accounts/Register";
// import PrivateRoute from "./components/common/PrivateRoute";
import Header from "./components/layout/header";
import Home from "./components/home";
import Analytic from "./components/analytic";
import Resource from "./components/resource";
import Community from "./components/community";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { Provider } from 'react-redux';
// import store from "./store";
// import { loadUser } from './actions/auth';

function App() {
  return (
    <div className="relative-position">
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/analytics" component={Analytic}/>
            <Route exact path="/resources" component={Resource}/>
            <Route exact path="/community" component={Community}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
