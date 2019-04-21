import React, { Component } from "react";
import { toast } from "react-toastify";
import { Redirect, NavLink } from "react-router-dom";
import Joi from "joi-browser";
import auth from "../services/authService";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {},
    hideCancel: false
  };

  /**
   * Joi schema for form inputs validation
   */
  schema = {
    username: Joi.string()
      .regex(/^[_ a-zA-Z0-9]+$/)
      .required()
      .min(3)
      .error(
        new Error(
          "Username should be of min length of 3 and _ is the only special character allowed"
        )
      ),

    password: Joi.string()
      .required()
      .regex(/^[_ a-z0-9]+$/)
      .min(3)
      .error(
        new Error(
          "Password should be of min length of 3 and _ is the only special character allowed"
        )
      )
  };

  /**
   * for validating the form
   * this is used to disable the login button if form inputs have any errors
   */
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = error.message;
    return errors;
  };

  /**
   * for validating each input field
   * and show the errors if input validation fails
   */
  validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.message : null;
  };

  /**
   * controlled usage of input
   * callback for onChange
   */
  handleInput = ({ currentTarget: input }) => {
    const { name, value } = input;
    const errors = { ...this.state.errors };

    const errorMessage = this.validateInput(input);

    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data, errors });
  };

  /**
   * for submission callback
   * launch login actions
   */
  _onSubmit = async e => {
    try {
      const { data } = this.state;
      e.preventDefault();
      toast.info("Logging in");

      this.setState({ hideCancel: true }); // temporarily hide cancel form option

      await auth.login(data.username, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (error) {
      const errors = { ...this.state.errors };
      errors.username = error.response.data.errorMessage;
      this.setState({ errors, hideCancel: false }); // enable cancel form if error
    }
  };

  render() {
    const { data, errors, hideCancel } = this.state;
    /**
     * only logged out users can access the login form
     */
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div>
        <form onSubmit={this._onSubmit}>
          <Input
            type="text"
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleInput}
            error={errors.username}
          />

          <Input
            type="password"
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleInput}
            error={errors.password}
          />
          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>

          {!hideCancel && (
            <NavLink to="/" className="btn btn-link">
              Cancel
            </NavLink>
          )}
        </form>
      </div>
    );
  }
}

export default LoginForm;
