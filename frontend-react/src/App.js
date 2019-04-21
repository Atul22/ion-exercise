import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import auth from "./services/authService";
import NavBar from "./components/navBar";
import Home from "./components/home";
import LoginForm from "./components/loginForm";
import Me from "./components/me";
import Logout from "./components/logout";
import NotFound from "./components/notFound";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    user: null // depending upon logged in users will render private views
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/login" exact component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/me" component={Me} />
            <Route
              path="/home"
              render={props => <Home {...props} user={this.state.user} />}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
