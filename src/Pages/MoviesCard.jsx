import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import "./MoviesCard.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const MoviesCard = ({ data }) => {
  const navigate = useNavigate();
  const progressValue = (data.vote_average * 10).toPrecision(2);
  const handleClick = () => {
    navigate(`/moviesdetail/${data.id}`);
  };
  return (
    <div className="movies" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="wrap-image">
        <img
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt=""
        />
        <div className="circular">
          <CircularProgressbar
            value={(data.vote_average * 10).toPrecision(2)}
            background
            text={`${progressValue}%`}
            const
            pourcent="%"
            backgroundPadding={6}
            styles={buildStyles({
              pathColor: "#FFCF00",
              textColor: "#ffffff",
              textSize: "33",
              backgroundColor: "#0D2241",
            })}
          />
        </div>
      </div>
      <div className="card-description">
        <p className="title" key={data.id}>
          {data.title}
        </p>
        <p className="date">
          <p>Date de sortie </p>
          {data.release_date}
        </p>
      </div>
    </div>
  );
};

export default MoviesCard;
