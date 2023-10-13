import "./style.css";

const FormEmail = (props) => {
  return (
    <div>
      <input
        onChange={props.onChange}
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      ></input>
    </div>
  );
};

export default FormEmail;
