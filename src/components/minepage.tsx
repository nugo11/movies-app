import avatar from "../../imgs/avatar.png";
import home from "../../imgs/icons/home.png";
import mov from "../../imgs/icons/movie.png";
import tv from "../../imgs/icons/tv.png";
import book from "../../imgs/icons/bookmarks.png";
import search from "../../imgs/icons/search.png";
import TrendingPosts from "./widgets/trending";
import MineGrid from "./widgets/mineGrid";
import { useState } from "react";

export default function MinePage() {
  const [show, setShow] = useState(false);

  const [getInput, setGetInput] = useState("");

  const logout = () => {
    localStorage.setItem("islogged", "no");
    location.reload();
  };

  const bookopen = () => {
    localStorage.setItem("book", "yes");
    location.reload();
  };
  const bookclose = () => {
    localStorage.setItem("book", "no");
    location.reload();
  };

  return (
    <>
      <div className="main">
        <div className="mainleft">
          <div className="menu">
            <div>
              <div className="logo" onClick={bookclose}></div>
              <nav>
                <li>
                  <img src={home} alt="home" onClick={bookclose} />
                </li>
                <li>
                  <img src={mov} alt="movies" onClick={bookclose} />
                </li>
                <li>
                  <img src={tv} alt="tv" onClick={bookclose} />
                </li>
                <li>
                  <img src={book} alt="bookmarks" onClick={bookopen} />
                </li>
              </nav>
            </div>
            <div className="profile">
              <img
                src={avatar}
                alt="avatar"
                onClick={() => (show ? setShow(false) : setShow(true))}
              />
              {show ? (
                <>
                  <div className="profilepop">
                    <button onClick={logout}>Log out</button>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mainright">
          {localStorage.getItem("book") === "yes" ? (
            <>
              <div className="moviegrid">
                <h1>Bookmarked Movies</h1>
                <MineGrid search={getInput} />
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="search">
                <img src={search} alt="search" />
                <input
                  type="text"
                  placeholder="Search for movies or TV series"
                  onChange={(e) => setGetInput(e.target.value)}
                />
              </div>
              {getInput.length === 0 ? (
                <>
                  <div className="slider">
                    {" "}
                    <h1>Trending</h1>
                    <TrendingPosts />
                  </div>
                </>
              ) : (
                <>
                  <h1>Found movies results for `{getInput}`</h1>
                </>
              )}
              <div className="moviegrid">
                {getInput.length === 0 ? <h1>Recommended for you</h1> : null}
                <MineGrid search={getInput} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
