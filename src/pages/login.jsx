import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.username === "") {
      return alert("missing username");
    }

    alert(`Welcome ${credentials.username}`);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const onValueChange = (e) => {
    setCredentials({ [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="login_container">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form_element">
              <h3>USERNAME</h3>
              <input name="username" type="text" onChange={onValueChange} />
            </div>
            <div className="form_element">
              <h3>PASSWORD</h3>
              <input name="password" type={"password"} />
            </div>
            <div className="form_element">
              <button type="submit">LOGIN</button>
            </div>
          </form>
        </div>
        <div className="signup_link">
          <p>
            Don't have an account? <Link to={"/signup"}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
