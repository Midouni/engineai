import { BaseRoutes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./app.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <BaseRoutes />
      </Provider>
    </>
  );
}

export default App;
