import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welkom bij Game Collector</h1>
      <Link to="/login">Ga naar Login</Link>
    </div>
  );
};

export default HomePage;
