import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./routes/ProtectedRoute";
import GamesPage from "./pages/GamesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Publieke routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Beveiligde route */}
        <Route
          path="/games"
          element={
            <ProtectedRoute>
              <GamesPage></GamesPage>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
