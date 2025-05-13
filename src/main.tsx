import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
<<<<<<< Updated upstream
import { ThemeProvider } from "./theme/themeContext.tsx";
=======
>>>>>>> Stashed changes

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< Updated upstream
      <ThemeProvider>
        <App />
      </ThemeProvider>
=======
      <App />
>>>>>>> Stashed changes
    </BrowserRouter>
  </StrictMode>
);
