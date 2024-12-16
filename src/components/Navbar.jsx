import { useDispatch, useSelector } from "react-redux";
import { REMOVE_USER } from "../utils/userSlice";

function Navbar() {
  const { username, isAuthenticated } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(REMOVE_USER());
  };

  return (
    <nav>
      <p>
        {isAuthenticated ? <>Hello {username}</> : <>Task Management App</>}
      </p>
      {isAuthenticated && (
        <button onClick={handleLogOut} className="task-btn">
          Log Out
        </button>
      )}
    </nav>
  );
}

export default Navbar;
