import React from "react";
import "./styles.css";
export default function Form() {
  return (
    <form>
      <button class="button">Search</button>
      <input
        type="search"
        name="search"
        id="search-text-input"
        placeholder="Enter a city"
        autocomplete="off"
      />
    </form>
  );
}
