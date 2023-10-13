import "./style.css";

const PasswordForm = (props) => {
  return (
    <div>
      <input
        onChange={props.onChange}
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
