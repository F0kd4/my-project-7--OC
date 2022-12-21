import React from "react";
import { useParams } from "react-router-dom";


const Logement = () => {
  const { logementId } = useParams();

  return (
    <div>
      <div className="logement__page">
        <h1>LOGEMENT {logementId }</h1>
      </div>
    </div>
  );
};

export default Logement;
