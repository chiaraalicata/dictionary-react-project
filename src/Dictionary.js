import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="text-center" onSubmit={search}>
        <input
          className="search-engine "
          type="search"
          onChange={handleKeywordChange}
          autofocus={true}
        />
      </form>
    </div>
  );
}
