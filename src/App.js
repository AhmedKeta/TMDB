import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./global/store";


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
