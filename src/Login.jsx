import React, { useState } from "react";
import Input from "./Input"; // Correct import path for Input component
import Button from "./Button"; // Correct import path for Button component
import { Link } from "react-router-dom";
import "./App.css";
import "./Login.css";
import { SignInWithGooglePopup, createUserDocFromAuth } from "./firebase";

const Login = (props) => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
};

  const [contact, setContact] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  return (
    <div className="header-div">
      <Input
        name="username"
        type="text"
        placeholder="username"
        onChange={handleChange}
        value={contact.username}
      />

      <br></br>

      <Input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
        value={contact.password}
      />

      <br></br>

      <Button type="submit" text="Login" />

      <br></br>

      <button onClick={logGoogleUser}>login with Google</button>

      <br></br>
      <br></br>

      <Link to="/signup">Sign up instead</Link>
    </div>
  );
};

export default Login;
