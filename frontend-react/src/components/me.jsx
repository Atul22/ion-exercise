import React from "react";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";

const Me = () => {
  const user = auth.getCurrentUser();
  return user ? <h1>{user.username}</h1> : <Redirect to="/" />;
};

export default Me;
