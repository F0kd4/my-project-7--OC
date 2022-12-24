import React, { useState } from "react";

import fleche from "../assets/img/fleche.svg";

function Collapse({ titre, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header">
        <div className="collapse__title">{titre}</div>
        <span
          className={`collapse__fleche ${open}`}
          onClick={() => setOpen(!open)}
        >
          <img src={fleche} alt="Cliquer pour développer" />
        </span>
      </div>
      {open && <div className="collapse__body">{description}</div>}
    </div>
  );
}

export default Collapse;
