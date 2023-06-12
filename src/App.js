import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./global/store";
import { Suspense, useState } from "react";
import Loading from "./components/Loading/Loading";
import LanguageContext from "./context/language";
function App() {
  const [language, setLanguage] = useState("en-us");
    const className = language.startsWith("ar") ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Suspense fallback={<Loading />}>
        <div className={className}>
          <Provider store={store}>
            <BrowserRouter>
              <AppRoutes></AppRoutes>
            </BrowserRouter>
          </Provider>
        </div>
      </Suspense>
    </LanguageContext.Provider>
  );
}

export default App;
