import React from "react";
import "./App.css";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import AppNavBar from "./Components/AppNavBar";
import LoginPage from "./pages/Login";
import { UserProvider } from "./Contexts/UserContext";

const App = () => {
  return (
    <UserProvider>
      <div>
        <Route component={AppNavBar} />
        <Container>
          <h1>Hello World</h1>
          <Switch>
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Container>
      </div>
    </UserProvider>
  );
};

export default App;
