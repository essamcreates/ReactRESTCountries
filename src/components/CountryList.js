import React from "react";
import Country from "./Country";

const CountryList = ({ countries, onToggleVisited }) => {
  return (
    <>
      <h2>Countries</h2>
      {countries.map(country => (
        <Country
          key={country.name.common}
          country={country}
          onToggleVisited={onToggleVisited}
        />
      ))}
    </>
  );
};

export default CountryList;
