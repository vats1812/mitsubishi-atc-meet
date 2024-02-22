import { useEffect, useState } from "react";
import "./App.css";
import mitsubishi from "./assets/logo.png";
import nirma from "./assets/nirma.png";
import plc from "./assets/plc.png";
import labview from "./assets/labview.png";
import axios from "axios";
import { Display } from "react-7-segment-display";
import Lights from "./components/Lights/Lights";
import Buttons from "./components/Buttons/Buttons";
import Radial from "./components/Radial/Radial";

function App() {
  const [result, setResult] = useState({});
  const fetchData = () => {
    axios
      .get(
        "https://atc-meet-2024-1f35f-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
      )
      .then((res) => {
        setResult(res.data);
      });
  };
  const decimalToBinary = (decimalNumber) => {
    if (decimalNumber > 255) {
      decimalNumber = 255;
    }
    return decimalNumber?.toString(2).padStart(8, "0");
  };

  let outputArr = String(
    decimalToBinary(result.outputs === undefined ? 0 : result?.outputs)
  )
    .split("")
    .reverse()
    .map((num) => {
      return Number(num);
    });
  let inputArr = String(
    decimalToBinary(result.inputs === undefined ? 0 : result?.inputs)
  )
    .split("")
    .reverse()
    .map((num) => {
      return Number(num);
    });
  let counter = result?.c1?.toString() + result?.c2?.toString();

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main-cont">
        <div className="navbar">
          <img src={mitsubishi} alt="mitsubishi logo" />
          <h1>Mitsubishi FX5U PLC IOT Interface using LabVIEW</h1>
          <img src={nirma} alt="nirma logo" />
        </div>
        <div className="body">
          <div className="left">
            <div className="outputs">
              <div className="op1">
                {outputArr.reverse().map((e, i) => (
                  <Lights
                    value={e}
                    index={7 - i}
                    key={i + 80}
                    prefix={"Y"}
                    classname={"yellow"}
                  />
                ))}
              </div>
              <div className="op2">
                {inputArr.reverse().map((e, i) => (
                  <Lights
                    value={e}
                    index={7 - i}
                    key={i + 80}
                    prefix={"X"}
                    classname={"green"}
                  />
                ))}
              </div>
              <div className="op3">
                <div className="buttons">
                  {result?.button?.map((e, i) => (
                    <Buttons value={e} index={i} prefix={"X"} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="center">
            <img src={plc} alt="FX5U PLC" />
            <h1
              style={{
                color: "#fff",
                marginTop: "15px",
                textShadow: "1px 2px 5px #00ff00",
              }}
            >
              PLC {result?.status ? "CONNECTED" : "DISCONECTED"} With LabVIEW
            </h1>
            <img
              width={250}
              style={{ marginTop: "15px" }}
              src={labview}
              alt="FX5U PLC"
            />
            <table
              style={{ fontSize: "20px", color: "#fff", marginTop: "35px" }}
            >
              <tbody>
                <tr>
                  <td rowSpan={2}>Project Prepared By: </td>
                  <td>Vatsal Rabadia</td>
                </tr>
                <tr>
                  <td>Rushil Sheth</td>
                </tr>
                <br />
                <tr>
                  <td rowSpan={2}>Project Guided By:</td>
                  <td>Prof. Alpesh Patel</td>
                </tr>
                <tr>
                  <td>Prof. Harsh Kapadia</td>
                </tr>
              </tbody>
            </table>
            {/* <h2 style={{ color: "#fff", marginTop: "20px" }}>
              Project Prepared By: <br /> Vatsal Rabadia <br /> Rushil Sheth{" "}
              <br />
              <br />
              Project Guided By: <br /> Prof. Alpesh Patel <br /> Prof. Harsh
              Kapadia
            </h2> */}
          </div>
          <div className="right">
            <Radial
              value={result?.analog}
              range={10.0}
              suffix={"V"}
              label={"Volt Meter"}
            />
            <Radial
              value={result?.sm411counter}
              range={5000}
              label={"SM411 Counter"}
            />
            <Radial
              value={result?.sm412counter}
              range={5000}
              label={"SM412 Counter"}
            />
            <Radial
              value={result?.sm413counter}
              range={5000}
              label={"SM413 Counter"}
            />
            <Radial
              value={result?.x0counter}
              range={5000}
              label={"X0 Counter"}
            />
            <div className="display-cont">
              <Display value={counter} count={2} height={100} skew />
              <p style={{ color: "#fff", fontSize: "25px" }}>Y10-Y17</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
