import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastMsg } from "../components/ToastMsg/ToastMsg";

export const handleToast = (msg: string) => {
    toast.success(<ToastMsg msg={msg} />, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

export  const handleToastError = (msg: string) => {
    toast.error(<ToastMsg msg={msg} />, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }; 

