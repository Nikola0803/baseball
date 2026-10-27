import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import ScrollToHash from "./components/feature/ScrollToHash";
import RevealOnScroll from "./components/feature/RevealOnScroll";


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <ScrollToHash />
        <RevealOnScroll />
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
