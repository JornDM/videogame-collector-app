import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../auth/googleAuth";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      navigate("/games"); // automatisch naar GamesPage
    } catch (error) {
      alert("Login mislukt, kijk console voor details");
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Bezig met inloggen..." : "Login met Google"}
      </button>
    </div>
  );
};

export default LoginPage;
