import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  avatar: {
    margin: 10
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

/**
 * Render application nav bar
 * which shows Home, Login, Logout and user avatar options
 */

class NavBar extends Component {
  render() {
    const { classes, user } = this.props;

    return (
      <div>
        <AppBar position="static" style={{ background: "#e91e63" }}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <NavLink
                to="/home"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Home
              </NavLink>
            </Typography>

            {!user && (
              <NavLink
                to="/login"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Button color="inherit">Login</Button>
              </NavLink>
            )}

            {user && (
              <React.Fragment>
                <NavLink
                  to="/me"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Avatar
                    src={require(`../static/${user.username}.jpg`)}
                    className={classes.avatar}
                  />
                </NavLink>

                <NavLink
                  to="/logout"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Button color="inherit">Logout</Button>
                </NavLink>
              </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
