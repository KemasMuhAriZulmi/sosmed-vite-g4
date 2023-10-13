import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { BiLogoReact } from "react-icons/bi";
import { Login_Page, Register_Form, Not_Found } from "../../helper";

const RegisterWrapper = () => {
  const navigate = useNavigate();

  const onHandleLogin = () => {
    navigate(Login_Page);
  };
  const onHandleRegist = () => {
    navigate(Register_Form);
  };

  return (
    <div id="register-container">
      <div id="big-logo">
        <BiLogoReact color="white" size={480} />
      </div>
      <div id="register-page">
        <h1>Connect Freely</h1>
        <h2>Share Joy.</h2>
        <div id="button-register">
          <button
            onClick={onHandleLogin}
            class="w-1/2 bg-stone-200 hover:bg-stone-300 text-black font-bold py-2 px-4 rounded-full"
          >
            Sign In
          </button>
        </div>
        <div className="or-wrapper">
          <div className="line"></div>
          <div id="or-font">
            <h6> or </h6>
          </div>
          <div className="line"></div>
        </div>
        <div id="button-register2">
          <button
            onClick={onHandleRegist}
            class="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Create Account
          </button>
        </div>
        <div className="cookie">
          <p>
            By signing up, you agree to the{" "}
            <Link to={Not_Found}>Terms of Service</Link> and
            <Link to={Not_Found}> Privacy Policy</Link>, including
            <Link to={Not_Found}> Cookie Use.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterWrapper;
