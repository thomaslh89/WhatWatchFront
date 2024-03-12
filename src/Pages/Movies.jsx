import { useState, useEffect } from "react";
import axios from "axios";
import MoviesCard from "./MoviesCard";
import Emoji from "react-emojis";
import "./Movies.css";
import { useGenre } from "../components/Context";
import Smileys from "../components/Smileys";
const Movies = () => {
  const { genre, page, handleGenreChange, setPage } = useGenre();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [lastNumber, setLastNumber] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const delay = 200;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = `https://site--whatwhatch--f5rrxgmqcwc8.code.run/?genre_ids=${genre}&page=${page}`;
        const response = await axios.get(url);
        console.log(response.data.results);
        setMovies(response.data.results);
        setData(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      } finally {
        setIsLoading(false);
        setTimeout(() => {
          setShowContent(true);
        }, delay);
      }
    };

    fetchData();
  }, [genre, page]);

  const handlePageChange = () => {
    const newPage = randomNumber();
    setPage(newPage);
  };
  const randomNumber = () => {
    let newRandomNumber;
    do {
      newRandomNumber = Math.floor(Math.random() * 10) + 1;
    } while (newRandomNumber === lastNumber);
    setLastNumber(newRandomNumber);
    return newRandomNumber;
  };

  return (
    <div>
      {isLoading || !showContent ? (
        <p></p>
      ) : (
        <div className="main">
          {movies.map((movie) => (
            <div key={movie.id}>
              <MoviesCard data={movie} />
            </div>
          ))}
        </div>
      )}
      <button className="one-more" onClick={() => handlePageChange()}>
        Afficher Plus
      </button>
    </div>
  );
};

export default Movies;
