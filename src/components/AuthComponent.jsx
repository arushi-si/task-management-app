import LoginForm from "./LoginForm";
import AddTask from "./AddTask";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

function AuthComponent() {
  const { isAuthenticated } = useSelector((store) => store.user);

  return (
    <>
      <Navbar />
      {isAuthenticated ? <AddTask /> : <LoginForm />}
    </>
  );
}

export default AuthComponent;
