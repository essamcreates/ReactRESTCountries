import { useState } from "react";

const Country = ({country}) => {

    const [visited, setVisited] = useState(false);

    const toggleVisited = () => {
        setVisited(!visited);
    };

    return(
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital City: {country.capital}</p>
            <button onClick={toggleVisited}>
                {visited ? "Mark as Unvisited" : "Mark as Visited"}
            </button>
        </div>
    )

}

export default Country;