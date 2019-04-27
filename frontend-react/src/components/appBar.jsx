import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

const styles = {
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

function NavBar(props) {
  const { classes, user } = props;
  return (
    <div>
      <AppBar position="static" style={{ background: "#e91e63" }}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
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
                {user.username}
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

export default withStyles(styles)(NavBar);
