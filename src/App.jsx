import React from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";
import { HashRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import NoMatchPage from "./NoMatchPage";
import Navbar from "./Navbar";

function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Register} />
          <Route path="*" component={NoMatchPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}
export default App;
