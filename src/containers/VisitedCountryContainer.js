import { useState, useEffect } from "react";
import VisitedCountryList from "../components/VisitedCountryList";

const VisitedCountryContainer = () => {

    const [countries, setCountries] = useState(null);

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        console.log("loading data");
        loadData();
    },[]);

    return(
        <>
            <h1>Country Club</h1>
            { countries ? <VisitedCountryList countries={countries}/> : <p>loading...</p>}
        </>
    )
}

export default VisitedCountryContainer;