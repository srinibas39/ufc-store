import "./Toast.css";

export const Toast = () => {
  return (
    <div className="toast-container">
      <div className="toast">
        <div className="toast-text">Video is getting liked</div>
        <div className="loader-element"></div>
      </div>
    </div>
  );
};
