import "./Toast.css";

export const Toast = ({ text }) => {
  return (
    <div className="toast-container">
      <div className="toast">
        <div className="toast-text">{text}</div>
        <div className="loader-element"></div>
      </div>
    </div>
  );
};
