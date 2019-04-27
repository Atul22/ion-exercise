import React, { Component } from "react";
import HomeCard from "./common/card";
import UserMedia from "./common/userMedia";

class Home extends Component {
  renderHeader = user => {
    return user ? (
      <h1 className="display-6">Welcome {user.username}!</h1>
    ) : (
      <h1 className="display-6">Welcome!</h1>
    );
  };

  renderLead = user => {
    return user ? (
      <p className="lead text-success">You have succesfully logged in</p>
    ) : (
      <p className="lead">You are not logged in!</p>
    );
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <HomeCard
          media={<UserMedia user={user} />}
          header={this.renderHeader(user)}
          lead={this.renderLead(user)}
        />
      </div>
    );
  }
}

export default Home;
