import React, { useState, useEffect } from "react";
import "./homepage.scss";
import Header from "../../components/header/header";
import Input from "../../components/input/input";
import MovieCard from "../../components/movie-card-res/movieCard";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResult] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const URL = "https://www.omdbapi.com/?s=fast&apikey=4a3b711b";
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setResult(data.Search);
        setLoading(false);
      });
  }, []);
  const searchByQuery = query => {
    setLoading(true);
    setErrMsg("");
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=4a3b711b`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "True") {
          setResult(data.Search);
          console.log(data.Search);
          setLoading(false);
        } else {
          setLoading(false);
          setErrMsg(data.Error);
        }
      });
  };
  return (
    <>
      <Header />
      <Input search={searchByQuery} />
      <section className="movie-res">
        {loading && !errMsg ? (
          <div className="loader">Loading</div>
        ) : errMsg ? (
          <p className="err">{errMsg}</p>
        ) : (
          results.map(result => (
            <MovieCard
              key={result.imdbID}
              Poster={result.Poster}
              Title={result.Title}
            />
          ))
        )}
      </section>
    </>
  );
};

export default Homepage;
