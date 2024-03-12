import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import "./MoviesVideos.css";

const MoviesVideo = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://site--whatwhatch--f5rrxgmqcwc8.code.run/movie/${id}/trailer`
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
    <div className="video-container">
      {isLoading ? (
        <span>En cours de chargement ...</span>
      ) : data.results && data.results.length > 0 ? (
        data.results.map((value, index) => (
          <div className="video-wrapper" key={index}>
            <LiteYouTubeEmbed
              poster="hqdefault"
              id={value.key}
              title={value.type}
              wrapperClass="yt-lite"
            />
          </div>
        ))
      ) : (
        <p className="no-moviesvideos">Pas de vidéos ou pour le moment</p>
      )}
    </div>
  );
};

export default MoviesVideo;
