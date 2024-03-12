import Movies from "../Pages/Movies";
import "./Home.css";
import { useGenre } from "./Context"; // Assurez-vous que le chemin est correct
import Smileys from "./Smileys";

const Home = () => {
  return (
    <div className="home-main">
      <Smileys />
      <Movies />
    </div>
  );
};

export default Home;
