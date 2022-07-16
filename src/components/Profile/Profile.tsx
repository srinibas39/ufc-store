import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useMode } from "../../context/ModeContext/ModeContext";

import "./Profile.css";
export const Profile = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  const { mode } = useMode();
  const { user } = useAuth();

  const logoutHandler = () => {
    handleLogout();
    navigate("/");
  };
  return (
    <div className="profile" id={mode ? `dark` : ""}>
      <div className="profile-header">
        <h2>PROFILE</h2>
      </div>
      <div className="profile-body">
        <p>
          <span className="material-symbols-outlined">account_circle</span>
          {user?.firstName + " " + user?.lastName}
        </p>
        <p>
          <span className="material-symbols-outlined">mail</span>
          {user?.email}
        </p>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};
