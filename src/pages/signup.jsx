import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";

function Signup() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // 0 - username error
  // 1- email error
  // 2 - password error
  const [error, setError] = useState({
    type: "",
    message: "",
  });

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.username === "") {
      return setError({ type: 0, message: "Invalid username" });
    }

    if (data.email === "" || !validator.isEmail(data.email)) {
      return setError({ type: 1, message: "Invalid Email" });
    }

    if (data.password === "" || data.password.length < 6) {
      return setError({
        type: 2,
        message: "Password length should be greater than 6 characters",
      });
    }

    alert(
      `New User is registerd with username ${data.username} & email ${data.email}`
    );
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="login">
      <div className="login_container">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form_element">
              <h3>USERNAME</h3>
              <input
                name="username"
                type="text"
                onChange={onValueChange}
                className={error.type === 0 && "error"}
              />
              {error.type === 0 && (
                <div className="error_message">{error.message}</div>
              )}
            </div>
            <div className="form_element">
              <h3>EMAIL</h3>
              <input
                name="email"
                type="text"
                onChange={onValueChange}
                className={error.type === 1 && "error"}
              />
              {error.type === 1 && (
                <div className="error_message">{error.message}</div>
              )}
            </div>
            <div className="form_element">
              <h3>PASSWORD</h3>
              <input
                name="password"
                type={"password"}
                onChange={onValueChange}
                className={error.type === 2 && "error"}
              />
              {error.type === 2 && (
                <div className="error_message">{error.message}</div>
              )}
            </div>
            <div className="form_element">
              <button type="submit">SIGN UP</button>
            </div>
          </form>
        </div>
        <div className="signup_link">
          <p>
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
