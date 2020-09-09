import React from "react";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import { Switch, Route, Redirect } from "react-router-dom";
import Finish from "./components/Finish";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/step/:stepNum">
            <RegistrationForm />
          </Route>
          <Route path="/finish">
            <Finish />
          </Route>
          <Route path="">
            <Redirect to="/step/1" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
