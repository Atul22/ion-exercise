import React, { Component } from "react";

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

  renderBody = user => {
    return (
      <div>
        {user && (
          <div>
            <hr className="my-4" />
            <p>{this.getBodyMessage(user)}</p>
          </div>
        )}
      </div>
    );
  };

  getBodyMessage = user => {
    return user ? `Hello ${user.username}, thanks for visiting us` : "";
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="jumbotron">
          {this.renderHeader(user)}
          {this.renderLead(user)}
          {this.renderBody(user)}
        </div>

        {user && (
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-6">Private View</h1>
              <p className="lead text-info">
                With great power comes great resposibility
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
