import React from "react";
import "./Lights.css";
function Lights({ value, index, prefix, classname }) {
  return (
    <>
      <div className="lights">
        <div className={classname} style={{ opacity: value ? 1 : 0.5 }}></div>
        <h3 style={{ color: "white" }}>
          {prefix}
          {index}
        </h3>
      </div>
    </>
  );
}

export default Lights;
