import React from "react";
import "./movieCard.scss";

const MovieCard = ({ Poster, Title }) => {
  return (
    <figure className="card">
      <img src={Poster} alt={Title} className="card__img" />
      <figcaption className="card__title">{Title}</figcaption>
    </figure>
  );
};

export default MovieCard;
