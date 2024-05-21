import { useEffect, useState } from "react";
import book from "../../../imgs/icons/movie.png";

export default function TrendingPosts() {
  const getApi =
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";

  const [getData, setGetData] = useState<any[]>([]);

  useEffect(() => {
    fetch(getApi)
      .then((response) => response.json())
      .then((data) => {
        setGetData(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="trandposts">
      {getData.map((movie, index) => (
        <li key={index} aria-label={movie.popularity}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path.replace(
              "/original",
              "/w500"
            )}`}
            alt={movie.original_title}
          />
          <div className="playbut"></div>
          <div className="Postinfo">
            <div className="info">
              <span>2019</span> •{" "}
              <span>
                <img src={book} alt="movies" /> Movie
              </span>{" "}
              • <span>PG</span>
            </div>
            <div className="posttitle">
              <span>{movie.original_title}</span>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}
