import LOGO from "../assets/logo.png";
import "../components/MainLayout.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <img className="logo-img" src={LOGO} alt="img" />
      <h1>Data Emporium</h1>
      <h3>The market for all your dataset needs!</h3>
    </div>
  );
};

export default HomePage;
