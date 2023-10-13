import "./style.css";

const Button = (props) => {
  return (
    <div className="ButtonComponent">
      <button id="buttoncomponent" onClick={props.onClick}></button>
    </div>
  );
};

export default Button;
