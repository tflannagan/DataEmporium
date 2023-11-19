// src/components/Button.jsx
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ label, onClick }) => {
  return (
    <button className="neu-button" onClick={onClick}>
      {label}
    </button>
  );
};
Button.propTypes = {
  label: PropTypes.node,
  onClick: PropTypes.node,
};
export default Button;
