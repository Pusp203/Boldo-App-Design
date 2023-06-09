import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import "./loginForm.scss";

const LoginForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isLoginParam = queryParams.get("login") === "true";

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [modal, setModal] = useState(true);

  // if (!isLoginParam) {
  //   navigate("/");
  //   return null;
  // }
  const handleClose = () => {
    setModal(false);
  };
  if (!modal) {
    return null;
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      setUsernameError("Username is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }
    if (username && password) {
      console.log("Username:", username);
      console.log("Password:", password);
      setUsername("");
      setPassword("");
    }
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setUsernameError("");
    setPasswordError("");
  };

  return (
    <>
      <div className="modal">
        <div className="modal-top">
          <div className="modal-top-header">
            <h2> Login Form</h2>
          </div>
          <div className="modal-top-body">
            <form onSubmit={handleSubmit} className="modal-top-body-form">
              <div className="form-group">
                <label htmlFor="username">
                  Username <span> * </span>
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  className={usernameError ? "error" : ""}
                />
                {usernameError && (
                  <div className="error-message">{usernameError}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Password
                  <span> * </span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={passwordError ? "error" : ""}
                />
                {passwordError && (
                  <div className="error-message">{passwordError}</div>
                )}
              </div>
              <div className="button-group">
                <button type="submit" className="login-btn">
                  Login
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div>
            <button className="close-btn">
              <RiCloseLine size={40} onClick={handleClose} />
            </button>
          </div>
          {/* <div>
          <img src={line} alt="" />
        </div> */}
        </div>
      </div>
      <div className="login_overlay"></div>
    </>
  );
};

export default LoginForm;
