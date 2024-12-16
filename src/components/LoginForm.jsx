import { useDispatch } from "react-redux";
import { CREATE_USER } from "../utils/userSlice";
import { useState } from "react";

function LoginForm() {
  const dispatch = useDispatch();
  // const [usernameError, setUsernameError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const authenticateUser = (e) => {
    e.preventDefault();
    const res = new FormData(e.target);
    const formData = Object.fromEntries(res.entries());
    const { username, password } = formData;
    let valid = true;
    if (username == "" || username.length < 4) {
      setIsUsernameError(true);
      valid = false;
      setTimeout(() => setIsUsernameError(false), 2000);
    }
    if (password == "" || password.length < 5) {
      setIsPasswordError(true);
      valid = false;
      setTimeout(() => setIsPasswordError(false), 2000);
    }
    if (valid) {
      dispatch(CREATE_USER({ ...formData, allTasks: [] }));
    }
  };

  return (
    <form id="login-form" onSubmit={authenticateUser}>
      <span className="form-field">
        <label htmlFor="username">Username</label>
        <span className="error-text">
          <input
            id="username"
            className="login-input"
            name="username"
            type="text"
          />
          {isUsernameError && <span>Enter Valid Username</span>}
        </span>
      </span>

      <span className="form-field">
        <label htmlFor="password">Password</label>
        <span className="error-text">
          <input
            className="login-input"
            name="password"
            type="password"
            id="password"
          />
          {isPasswordError && <span>{`Enter Length > 5`}</span>}
        </span>
      </span>

      <button className="task-btn">Submit</button>
    </form>
  );
}

export default LoginForm;
