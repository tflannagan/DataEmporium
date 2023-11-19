import LOGO from "../assets/logo.png";
import "../components/MainLayout.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <img className="logo-img" src={LOGO} alt="img" />
      <h1>Data Emporium</h1>
    </div>
  );
};

export default HomePage;
