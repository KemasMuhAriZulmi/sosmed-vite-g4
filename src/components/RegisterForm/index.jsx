import "./style.css";
import CloseButton from "../CloseButton";

const RegisterForm = () => {
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
            />
            <h3 className="alertform">alert jika email invalid</h3>
          </div>
          <div id="name">
            <div id="nameform">
              <h1 className="label">Username</h1>
              <input
                type="text"
                placeholder="Enter your username"
                className="styled-input"
              />
              <h3 className="alertform">alert jika username invalid</h3>
            </div>
          </div>
          <div id="password">
            <div id="passwordform">
              <h1 className="label">Password</h1>
              <input
                type="text"
                placeholder="Enter your password"
                className="styled-input"
              />
              <h3 className="alertform"> </h3>
            </div>
          </div>
          <div id="confirm-password">
            <div id="nameform">
              <h1 className="label">Password</h1>
              <input
                type="text"
                placeholder="Enter your password"
                className="styled-input"
              />
              <h3 className="alertform">alert jika password invalid</h3>
            </div>
          </div>
          <div id="next">
            <div className="next-wrapper">
              <button class="w-1/2 bg-stone-200 hover:bg-stone-300 text-black font-bold py-2 px-4 rounded-full">
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
