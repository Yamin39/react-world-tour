import { useEffect, useState } from "react";
import Country from "../country/Country";
import VisitedFlags from "../visitedFlags/VisitedFlags";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  function handleVisited(countryName, flagUrl) {
    // listing visited countries
    // const visitedCountriesArr = [...visitedCountries, countryName];
    setVisitedCountries([...visitedCountries, countryName]);
    // listing visited countries flags
    // const visitedFlagsArr = [...visitedFlags, flagUrl];
    setVisitedFlags([...visitedFlags, flagUrl]);
  }

  const handleDelBtn = (name, flagUrl) => {
    setVisitedCountries(visitedCountries.filter((item) => item !== name));
    setVisitedFlags(visitedFlags.filter((item) => item !== flagUrl));
    console.log(name);
  };

  return (
    <>
      <p style={{ textAlign: "center" }}>Total Countries: {countries.length}</p>
      <div className="visited-countries-container">
        <h3>Marked as visited Countries: {visitedCountries.length}</h3>
        <ul style={{ margin: "15px" }}>
          {visitedCountries.map((name, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
              <span>
                {i + 1}. {name}
              </span>
              <img
                onClick={() => handleDelBtn(name, visitedFlags[i])}
                style={{ width: "20px", cursor: "pointer" }}
                src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
              ></img>
            </li>
          ))}
        </ul>
      </div>
      <VisitedFlags visitedFlags={visitedFlags}></VisitedFlags>
      <div className="Countries">
        {countries.map((country) => (
          <Country key={country.name.common} handleVisited={handleVisited} country={country}></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
