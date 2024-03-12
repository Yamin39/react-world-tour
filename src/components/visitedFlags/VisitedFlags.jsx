import "./VisitedFlags.css";

const VisitedFlags = ({ visitedFlags }) => {
  return (
    <div className="visited-countries-container">
      <h3>Marked as visited Countries Flags</h3>
      <div className="flags-container">
        {visitedFlags.map((url, i) => ( 
          <img className="visited-flags" key={i} src={url} alt="" />
        ))}
      </div>
    </div>
  );
};

export default VisitedFlags;
