import React from "react";

const VisitedCountryList = ({ visitedCountries }) => {
  return (
    <>
      <h2>Visited Countries</h2>
      {visitedCountries && visitedCountries.length > 0 ? (
        visitedCountries.map(country => (
          <div key={country.name.common}>
            <h3>{country.name.common}</h3>
            <p>Capital City: {country.capital}</p>
          </div>
        ))
      ) : (
        <p>No visited countries yet.</p>
      )}
    </>
  );
};

export default VisitedCountryList;