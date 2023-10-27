import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./App.css";
import "./Signup.css";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "./firebase";

const Signup = (props) => {
  const [contact, setContact] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { displayName, email, password, confirmPassword } = contact;

  console.log(contact);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  };

  return (
    <div className="header-div">
      <Input
        name="displayName "
        type="text"
        placeholder="name"
        onChange={handleChange}
        value={contact.displayName}
      />

      <Input
        name="email"
        type="email"
        placeholder="email"
        onChange={handleChange}
        value={contact.email}
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

      <Input
        name="confirmPassword"
        type="password"
        placeholder="confirm password"
        onChange={handleChange}
        value={contact.confirmPassword}
      />

      <br></br>

      <button onClick={handelSubmit}>Signup</button>

      <br></br>
      <br></br>

      <Link to="/login">Login</Link>
    </div>
  );
};
export default Signup;
