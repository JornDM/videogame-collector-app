import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./routes/ProtectedRoute";
import GamesPage from "./pages/GamesPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import { GamesAuthProvider } from "./auth/GamesAuthContext";

function App() {
  return (
    <GamesAuthProvider>
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
              <GamesPage/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/gameDetails"
          element={
            <ProtectedRoute>
              <GameDetailsPage/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    </GamesAuthProvider>
  );
}

export default App;
