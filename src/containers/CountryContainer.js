import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VisitedCountryList";

const CountryContainer = () => {

    const [countries, setCountries] = useState(null);

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        const countriesWithVisited = jsonData.map(country => ({
            ...country,
            visited: false,
        }))
        setCountries(jsonData);
    }

    useEffect(() => {
        console.log("loading data");
        loadData();
    },[]);

    return(
        <>
            <h1>Country Club</h1>
            { countries ? <CountryList countries={countries}/> : <p>loading...</p>}
        </>
    )
}

export default CountryContainer;