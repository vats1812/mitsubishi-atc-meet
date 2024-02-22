import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
function Radial({ value, range, suffix = "", label }) {
  return (
    <>
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbarWithChildren
          value={value}
          maxValue={range}
          styles={buildStyles({
            pathColor: "#ff0000",
          })}
        >
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
          <div style={{ fontSize: 15, color: "#fff", textAlign: "center" }}>
            <strong>
              {value}
              {suffix}
            </strong>
            <h3 style={{ width: 100 }}>{label}</h3>
          </div>
        </CircularProgressbarWithChildren>
        ;
      </div>
    </>
  );
}

export default Radial;
