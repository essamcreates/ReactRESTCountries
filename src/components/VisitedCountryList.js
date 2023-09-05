import React from "react";
import Country from "./Country"


const VisitedCountryList = ({countries}) => {

    const mappedCountries = countries.map(country => {
        return <Country country={country} key={country.name.official}/>
    })

    return(
        <>
            <h2>Visited Countries</h2>
            {mappedCountries}
        </>
    );


};

export default VisitedCountryList; 