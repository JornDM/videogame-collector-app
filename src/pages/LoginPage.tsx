import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Voor nu gewoon navigeren naar games
    navigate("/games");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <button onClick={handleLoginClick}>Login (voorbeeld)</button>
    </div>
  );
};

export default LoginPage;
