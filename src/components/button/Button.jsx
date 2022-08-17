import './button.css';

function Button({ children, backgroundColor }) {
  return <div className={`u-button ${backgroundColor}`}>{children}</div>;
}

export default Button;
