import React, { useState } from "react";
import "./input.scss";

const Input = ({ search }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    // send query to fetch data from api
    search(searchQuery);
    setSearchQuery("");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={handleChange}
        value={searchQuery}
        className="form__input"
      />
      <button type="submit" className="form__btn">
        Search
      </button>
    </form>
  );
};

export default Input;
