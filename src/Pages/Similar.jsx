import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Similar.css";
const Similar = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://site--whatwhatch--f5rrxgmqcwc8.code.run/movies/${id}/similar`
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

  const handleClick = (similarId) => {
    navigate(`/moviesdetail/${similarId}`);
  };

  return (
    <div>
      {isLoading ? (
        <span>En cours de chargement ...</span>
      ) : (
        <div className="similar-container">
          {data.results.map((value, index) => {
            if (value.backdrop_path)
              return (
                <div className="similar-card">
                  <div
                    key={index}
                    onClick={() => handleClick(value.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className="similar-image"
                      src={`https://image.tmdb.org/t/p/w300/${value.backdrop_path}`}
                      alt=""
                    />
                    <div className="text-similar">
                      <p>{value.title} </p>
                      <p>{(value.vote_average * 10).toPrecision(2)}%</p>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default Similar;
