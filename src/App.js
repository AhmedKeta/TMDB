import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";


function App() {

  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>

  );
}

export default App;
