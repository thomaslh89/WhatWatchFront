import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import "./MoviesProvider.css";
const MoviesProvider = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      try {
        const response = await axios.get(
          `https://site--whatwhatch--f5rrxgmqcwc8.code.run/movie/${id}/watchon`
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      } finally {
        setisLoading(false);
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
          {data.results.FR && (
            <a
              className="button-provider"
              href={data.results.FR.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Regardez Maintenant
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default MoviesProvider;
