import { useNavigate } from "react-router-dom";
import Smileys from "./Smileys";
import { useGenre } from "./Context";
import Logo from "../assets/Logo.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const { handleGenreChange } = useGenre();
  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <div className="Header">
      <img
        onClick={handleClick}
        style={{ cursor: "pointer" }}
        src={Logo}
        alt="Bouton Home"
      />

      <p>Trouvez un film qui correspond à votre humeur </p>
    </div>
  );
};

export default Header;
