import { useEffect, useState } from "react";
import book from "../../../imgs/icons/movie.png";
import book1 from "../../../imgs/icons/bookmarks-white.png";

export default function MineGrid(search: any) {
  const getApi =
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";

  const [getData, setGetData] = useState<any[]>([]);
  const [getBook, setGetBook] = useState<string[]>([]);

  useEffect(() => {
    fetch(getApi)
      .then((response) => response.json())
      .then((data) => {
        setGetData(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const bookValues = keys
      .filter((key) => key.includes("book"))
      .map((key) => localStorage.getItem(key))
      .filter((value): value is string => value !== null);
    setGetBook(bookValues);
  }, []);

  return (
    <div className="gridpost">
      {localStorage.getItem("book") === "no" ? (
        <>
          {getData
            .filter((rame: any) =>
              rame.original_title.includes(
                `${
                  search.search.charAt(0).toUpperCase() + search.search.slice(1)
                }`
              )
            )
            .map((movie: any, index: any) => (
              <li key={index} aria-label={movie.popularity}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
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
                <div
                  className={
                    getBook.includes(movie.original_title)
                      ? "bookmarks selected"
                      : "bookmarks"
                  }
                  onClick={() => {
                    if (getBook.includes(movie.original_title)) {
                      localStorage.removeItem(`booki-${movie.id}`);
                      location.reload();
                    } else {
                      localStorage.setItem(
                        `booki-${movie.id}`,
                        movie.original_title
                      );
                      location.reload();
                    }
                  }}
                >
                  <img src={book1} alt="bookmark" />
                </div>
              </li>
            ))}
        </>
      ) : (
        <>
          {getData
            .filter((rame: any) => getBook.includes(rame.original_title))
            .map((movie: any, index: any) => (
              <li key={index} aria-label={movie.popularity}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
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
                <div
                  className="bookmarks selected"
                  onClick={() => {
                    localStorage.removeItem(`booki-${movie.id}`);
                    location.reload();
                  }}
                >
                  <img src={book1} alt="bookmark" />
                </div>
              </li>
            ))}
        </>
      )}
    </div>
  );
}
