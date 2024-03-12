import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import "./WhatchNow.css";
const WatchNow = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://site--whatwhatch--f5rrxgmqcwc8.code.run/movies/${id}/watch`
        );
        setData(response.data);
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
          {data.homepage && (
            <a className="button-watchnow" href={data.homepage}>
              Site officiel
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default WatchNow;
