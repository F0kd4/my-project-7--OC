import React, { useState } from "react";
import PropTypes from "prop-types";

import fleche from "../assets/img/fleche.svg";

function Collapse({ titre, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setOpen(!open)}>
        <div className="collapse__title">{titre}</div>
        <span className={`collapse__arrow ${open}`}>
          <img src={fleche} alt="Cliquer pour développer" />
        </span>
      </div>
      {open && <div className="collapse__body">{description}</div>}
    </div>
  );
}

Collapse.propTypes = {
  titre: PropTypes.string,
};

export default Collapse;
