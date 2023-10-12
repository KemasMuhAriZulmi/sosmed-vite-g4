import "./style.css";

const PasswordForm = () => {
  return (
    <div>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        required
      ></input>
    </div>
  );
};

export default PasswordForm;
