import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VisitedCountryList";

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [filterText, setFilerText] = useState("");

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        jsonData.splice(47, 1);
        setCountries(jsonData);
    }

    useEffect(() => {
        console.log("loading data");
        loadData();
    }, []);

    const handleToggleVisited = (country, visited) => {
        if (visited) {
            setVisitedCountries([...visitedCountries, country]);
        } else {
            const updatedVisitedCountries = visitedCountries.filter(
                visitedCountry => visitedCountry.name.common !== country.name.common
            );
            setVisitedCountries(updatedVisitedCountries);
        }
    }

    const handleFilterTextChange = (event) => {
        setFilerText(event.target.value);
    }

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(filterText.toLowerCase())
    );


    return (
        <>
            <h1>Country Club</h1>
            <form>
                {/* Step 4: Add filter input */}
                <label>
                    Filter Countries:
                    <input
                        type="text"
                        value={filterText}
                        onChange={handleFilterTextChange}
                    />
                </label>
            </form>
            {countries.length > 0 ? (
                <>
                    {/* Step 5: Use filteredCountries */}
                    <CountryList countries={filteredCountries} onToggleVisited={handleToggleVisited} />
                    <VisitedCountryList visitedCountries={visitedCountries} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default CountryContainer;