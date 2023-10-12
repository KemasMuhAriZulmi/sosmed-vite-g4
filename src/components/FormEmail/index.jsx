import "./style.css";

const FormEmail = () => {
  return (
    <div>
      <input
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
