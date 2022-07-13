import "./Toast.css";
import { ToastProps } from "./Toast.types";

export const Toast = ({ text }:ToastProps) => {
  return (
    <div className="toast-container">
      <div className="toast">
        <div className="toast-text">{text}</div>
        <div className="loader-element"></div>
      </div>
    </div>
  );
};
