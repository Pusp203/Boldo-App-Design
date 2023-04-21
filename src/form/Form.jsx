import React from "react";
import "./form.scss";
import { RiCloseLine } from "react-icons/ri";

const Form = () => {
  return (
    <div className="form">
      <div className="form-body">
        <h2>Login</h2>
        <RiCloseLine />
        <div className="form-body__mainform">
          <form action="">
            <div>
              <label
                htmlFor="userName"
                className="form-body__mainform-userName"
              >
                Username
              </label>
              <input type="text" name="userName" id="userName" required />
            </div>
            <div>
              <label
                htmlFor="password"
                className="form-body__mainform-password"
              >
                Password
              </label>
              <input type="password" name="password" id="password" />
            </div>
          </form>
        </div>
        <div className="form-body__button">
          <button className="form-body__button--login">Login</button>
          <button className="form-body__button--login">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
