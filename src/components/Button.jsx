// src/components/Button.jsx

import "./Button.scss";

const Button = ({ label, onClick }) => {
  return (
    <button className="neu-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
