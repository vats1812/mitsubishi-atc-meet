import React from "react";
import "./Buttons.css";
function Buttons({ value, index, prefix }) {
  return (
    <>
      <div className="button-main">
        <label class="button-cont">
          <input type="checkbox" checked={value ? true : false} />
          <div class="checkmark">
            <svg viewBox="0 0 49.548 49.549" id="Capa_1" version="1.1">
              <g>
                <g>
                  <g>
                    <path
                      d="M30.203,4.387v4.385c7.653,2.332,13.238,9.451,13.238,17.857c0,10.293-8.373,18.667-18.667,18.667
				S6.106,36.922,6.106,26.629c0-8.405,5.585-15.525,13.238-17.857V4.387C9.323,6.835,1.855,15.866,1.855,26.629
				c0,12.639,10.281,22.92,22.919,22.92s22.92-10.281,22.92-22.92C47.694,15.865,40.224,6.835,30.203,4.387z"
                    ></path>
                  </g>
                  <g>
                    <path
                      d="M24.776,27.225c-1.41,0-2.554-1.145-2.554-2.555V2.554c0-1.41,1.144-2.554,2.554-2.554c1.41,0,2.554,1.144,2.554,2.554
				V24.67C27.33,26.08,26.186,27.225,24.776,27.225z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </label>
        <h3 style={{ color: "white" }}>
          {prefix}
          {index}
        </h3>
      </div>
    </>
  );
}

export default Buttons;
