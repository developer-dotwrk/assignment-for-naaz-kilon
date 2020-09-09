import React from "react";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/step/:stepNum">
            <RegistrationForm />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
