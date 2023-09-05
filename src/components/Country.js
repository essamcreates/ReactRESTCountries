import React, { useState } from "react";

const Country = ({ country, onToggleVisited }) => {
  const [visited, setVisited] = useState(false);

  const toggleVisited = () => {
    setVisited(!visited);
    onToggleVisited(country, !visited);
  };

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital City: 
        {country.capital}
        {country.flag}
        {country.region}
        {country.subregion}
        {country.demonym}
        </p>
      <label>
        <input
          type="checkbox"
          checked={visited}
          onChange={toggleVisited}
        />
        {visited ? "Mark as Unvisited" : "Mark as Visited"}
      </label>
    </div>
  );
};

export default Country;
