import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./features/home";
import { NotFoundPage } from "./features/NotFound";

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}
export default App;
