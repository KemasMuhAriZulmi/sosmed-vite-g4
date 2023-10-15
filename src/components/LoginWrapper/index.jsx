import "./style.css";
import CloseButton from "../CloseButton";
import FormEmail from "../FormEmail";
import PasswordForm from "../PasswordForm";
import Button from "../Button";
import { BiLogoReact } from "react-icons/bi";
import React from "react";
import axios from "axios";
import { Not_Found } from "../../helper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/action/accountAction";
import { Link } from "react-router-dom";
import { Register_Form } from "../../helper";

const LoginWrapper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inEmail, setInEmail] = React.useState("");
  const [inPassword, setInPassword] = React.useState("");
  const [inAlert, setInAlert] = React.useState("");
  const account = useSelector((state) => state.accountReducer.email);

  const onLogin = () => {
    axios
      .get(
        `http://localhost:2024/account?email=${inEmail}&password=${inPassword}`
      )
      .then((response) => {
        console.log("Check USER", response.data);
        if (!response.data.length) {
          setInAlert(
            "email or password does not exist, re-enter email or password"
          );
          setInEmail("");
          setInPassword("");
        } else {
          localStorage.setItem("auth", JSON.stringify(response.data[0]));
          dispatch(loginAction(response.data[0]));
          setInEmail("");
          setInPassword("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("Test", account);

  React.useEffect(() => {
    if (account) {
      navigate("/timeline");
    }
  }, [account]);

  return (
    <div>
      <div className="container" id="container">
        <div id="top">
          <div className="side" id="close">
            <CloseButton />
          </div>
          <div id="logo">
            <BiLogoReact size={32} color="white" />
          </div>
          <div className="side"></div>
        </div>

        <div className="form">
          <h1 className="login-first" id="login">
            Login First <span>!</span>
          </h1>
          <div className="fill">
            <FormEmail onChange={(e) => setInEmail(e.target.value)} />
            <div className="alert-box">
              <h1 className="alert"></h1>
            </div>
          </div>
          <div className="fill">
            <PasswordForm onChange={(e) => setInPassword(e.target.value)} />
          </div>
          <div className="alert-box">
            <h1 className="alert">{inAlert}</h1>
          </div>
          <div className="submit">
            <div>
              <Link to={Register_Form}>
                <h1 className="goright">
                  Tidak Punya <span>Account ?</span>
                </h1>
              </Link>
            </div>
            <div>
              <Button onClick={onLogin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWrapper;
