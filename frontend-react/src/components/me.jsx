import React from "react";
import { Redirect } from "react-router-dom";
import auth from "../services/authService";
import HomeCard from "./common/card";
import UserMedia from "./common/userMedia";

const Me = () => {
  const user = auth.getCurrentUser();

  return user ? (
    <HomeCard media={<UserMedia user={user} />} lead={<p>{user.username}</p>} />
  ) : (
    <Redirect to="/" />
  );
};

export default Me;
