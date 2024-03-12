import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisited }) => {
  const [isVisited, setIsVisited] = useState(false);

  const handleVisitedBtn = () => {
    setIsVisited(!isVisited);
  };

  //   console.log(country);
  const { name, flags, population, area, cca3 } = country;

  return (
    <div style={{ backgroundColor: `${isVisited ? "rgba(0, 255, 0, 0.233)" : "rgba(122, 122, 122, 0.144)"}` }} className="Country">
      <h3>{name.common}</h3>
      <img src={flags.png} alt={name.common} />
      <div>
        <h4>Details</h4>
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p>Code: {cca3}</p>
      </div>
      <div>
        <button className={isVisited ? "visitedBtn" : ""} onClick={handleVisitedBtn}>
          {isVisited ? "Visited" : "Going"}
        </button>
        <span>{isVisited && ` I have Visited ${name.common}`}</span>
      </div>
      <button onClick={()=>{
        handleVisited(name.common, flags.png)
      }}>Mark as visited</button>
    </div>
  );
};

export default Country;
