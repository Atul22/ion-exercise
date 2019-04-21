import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ user }) => {
  function getLoginState() {
    return user ? "Logged In" : "Logged Out";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="nav-link" to="/home">
        {getLoginState()}
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>

          {!user && (
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          )}

          {user && (
            <React.Fragment>
              <NavLink className="nav-link" to="/me">
                {user.username}
              </NavLink>

              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
