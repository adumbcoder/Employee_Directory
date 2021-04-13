//takes user input and passes it as a prop for the api call.

import React from "react";
import "./style.css";


function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          name="userInput"
          list="userInput"
          type="text"
          className="form-control"
          placeholder="Search employees here."
          id="userInput"
          onSubmit={props.handleFormSubmit}
        />
      </div>
    </form>
  );
}

export default SearchForm;