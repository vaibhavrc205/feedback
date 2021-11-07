import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Feedback from "./Feedback/Feedback";
import Home from "./Home";
import Registration from "./Registration/Registration";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
