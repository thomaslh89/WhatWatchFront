import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import MoviesVideo from "./MoviesVideos";
import WatchNow from "./WatchNow";
import Similar from "./Similar";
import "./MoviesDetails.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoviesProvider from "./MoviesProvider";
const MoviesDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const progressValue = (data.vote_average * 10).toPrecision(2);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://site--whatwhatch--f5rrxgmqcwc8.code.run/movies/${id}`
        );
        setData(response.data); // Mise à jour de l'état avec les données reçues
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <span>En cours de chargement ...</span>
      ) : (
        <div>
          <div className="detail-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
              alt=""
            />
            <div className="detail-description">
              <h3 className="title-details">
                <p>{data.title}</p>
                <p className="date-details">
                  ({data.release_date.slice(0, 4)})
                </p>
              </h3>
              <div className="release-details">
                {data.release_date}
                {data.genres.map((genre, index) => {
                  return <p key={index}>{genre.name}, </p>;
                })}
                {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
              </div>

              <p>
                <div className="vote-wrapper">
                  <CircularProgressbar
                    className="vote-details"
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
                  <p>Note des utilisateurs</p>
                  <div className="button-wrapper">
                    <WatchNow id={id} />
                    <MoviesProvider id={id} />
                  </div>
                </div>

                <p className="tagline-details">{data.tagline}</p>
                <h3 className="synopsys-title">Synopsys</h3>
                <p className="synopsys-details">{data.overview}</p>
              </p>
            </div>
          </div>
          <h2 className="recommand">Videos </h2>
          <div className="videos-details">
            <MoviesVideo id={id} />
          </div>
          <h2 className="recommand">Recommandations </h2>
          <div className="recommandation">
            <Similar id={id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesDetails;
