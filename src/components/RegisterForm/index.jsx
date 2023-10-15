import "./style.css";
import CloseButton from "../CloseButton";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Login_Page } from "../../helper";
import axios from "axios";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [inEmail, setInEmail] = React.useState("");
  const [inUsername, setInUsername] = React.useState("");
  const [inConfirmPassword, setInConfirmPassword] = React.useState("");
  const [inPassword, setInPassword] = React.useState("");
  const [inAllert, setInAllert] = React.useState("");

  const handleSubmit = () => {
    if (!inEmail || !inUsername || !inConfirmPassword || !inPassword) {
      setInAllert("all forms must be filled in!");
      setInEmail(""),
        setInUsername(""),
        setInConfirmPassword(""),
        setInPassword("");
    } else if (inEmail.indexOf("@") === -1 && inEmail.indexOf(".com" === -1)) {
      setInAllert("invalid email"),
        setInEmail(""),
        setInUsername(""),
        setInConfirmPassword(""),
        setInPassword("");
    } else if (inUsername.length < 6) {
      setInAllert("The password must contain a minimum of 6 characters"),
        setInEmail(""),
        setInUsername(""),
        setInConfirmPassword(""),
        setInPassword("");
    } else if (inConfirmPassword !== inPassword) {
      setInAllert("reconfirm your password"),
        setInEmail(""),
        setInUsername(""),
        setInConfirmPassword(""),
        setInPassword("");
    } else {
      axios
        .post(`http://localhost:2024/account`, {
          name: inUsername,
          password: inPassword,
          email: inConfirmPassword,
          profilepicture: "",
        })
        .then((response) => {
          console.log("Check Product", response.data);
          navigate(Login_Page);
        }).catch = (error) => {
        console.log(error);
      };
    }
  };

  return (
    <div id="form-container">
      <div id="form-wrapper">
        <div id="top-wrapper">
          <div id="top-left">
            <CloseButton />
          </div>
          <div id="text">
            <h1>Sign Up</h1>
          </div>
          <div id=""></div>
        </div>
        <div id="form">
          <div id="emailform">
            <h1 className="label">Email</h1>
            <input
              type="text"
              placeholder="Enter your email"
              className="styled-input"
              onChange={(e) => setInEmail(e.target.value)}
            />
            {/* <h3 className="alertform">alert jika email invalid</h3> */}
          </div>
          <div id="name">
            <div id="nameform">
              <h1 className="label">Username</h1>
              <input
                type="text"
                placeholder="Enter your username"
                className="styled-input"
                onChange={(e) => setInUsername(e.target.value)}
              />
              {/* <h3 className="alertform">alert jika username invalid</h3> */}
            </div>
          </div>
          <div id="password">
            <div id="passwordform">
              <h1 className="label">Password</h1>
              <input
                type="password"
                placeholder="Enter your password"
                className="styled-input"
                onChange={(e) => setInPassword(e.target.value)}
              />
              {/* <h3 className="alertform">alert jika password invalid </h3> */}
            </div>
          </div>
          <div id="confirm-password">
            <div id="nameform">
              <h1 className="label">Password</h1>
              <input
                type="password"
                placeholder="Enter your password"
                className="styled-input"
                onChange={(e) => setInConfirmPassword(e.target.value)}
              />
              <h3 className="alertform">{inAllert}</h3>
            </div>
          </div>
          <div id="next">
            <div className="next-wrapper">
              <button
                class="w-1/2 bg-stone-200 hover:bg-stone-300 text-black font-bold py-2 px-4 rounded-full"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
