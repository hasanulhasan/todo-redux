import { Provider } from "react-redux";
import Home from "./components/Home";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

export default App;
