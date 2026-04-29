import "./Button.css";

function Button({ label, onClick, color = "dark", wide = false }) {
  const colorClass = {
    dark: "calc-btn--dark",
    gray: "calc-btn--gray",
    orange: "calc-btn--orange",
  }[color];

  return (
    <button
      onClick={onClick}
      className={`calc-btn ${colorClass}${wide ? " calc-btn--wide" : ""}`}
    >
      {label}
    </button>
  );
}

export default Button;
