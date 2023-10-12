import "./style.css";
import CloseButton from "../CloseButton";
import FormEmail from "../FormEmail";
import PasswordForm from "../PasswordForm";
import Button from "../Button";

const LoginWrapper = () => {
  return (
    <div>
      <div className="container" id="container">
        <div id="top">
          <div className="side" id="close">
            <CloseButton />
          </div>
          <div id="logo">
            <h1>Logo</h1>
          </div>
          <div className="side"></div>
        </div>

        <div className="form">
          <h1 className="login-first" id="login">
            Login First <span>!</span>
          </h1>
          <div className="fill">
            <FormEmail />
            <div>
              <h1 className="alert">Alert Jika Email tidak dimasukkan</h1>
            </div>
          </div>
          <div className="fill">
            <PasswordForm />
          </div>
          <div>
            <h1 className="alert">Alert Jika Password Salah</h1>
          </div>
          <div className="submit">
            <div>
              <a href="">
                <h1 className="goright">
                  Tidak Punya <span>Account ?</span>
                </h1>
              </a>
            </div>
            <div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWrapper;
