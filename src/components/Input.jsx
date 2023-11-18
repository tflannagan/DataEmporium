// src/components/Input.jsx
import "./Input.scss";
import PropTypes from "prop-types";

const Input = ({ type, placeholder }) => {
  return <input className="neu-input" type={type} placeholder={placeholder} />;
};

Input.propTypes = {
  type: PropTypes.node,
  placeholder: PropTypes.node,
};

export default Input;
