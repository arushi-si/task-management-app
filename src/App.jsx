import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import AuthComponent from "./components/AuthComponent";

function App() {
  return (
    <Provider store={store}>
      <AuthComponent />
    </Provider>
  );
}

export default App;
