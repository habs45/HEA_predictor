import "./App.css";
import { useState } from "react";

function App() {
  const [Al, setAl] = useState(0);
  const [Co, setCo] = useState(0);
  const [Cr, setCr] = useState(0);
  const [Cu, setCu] = useState(0);
  const [Fe, setFe] = useState(0);
  const [Mn, setMn] = useState(0);
  const [Ni, setNi] = useState(0);
  const [V, setV] = useState(0);
  const [Nb, setNb] = useState(0);
  const [Output, setOutput] = useState(0);
  const [AverageDensity, setAverageDensity] = useState(0);

  const handleChangeAl = (e) => {
    setAl(e.target.value);
  };
  const handleChangeCo = (e) => {
    setCo(e.target.value);
  };
  const handleChangeCr = (e) => {
    setCr(e.target.value);
  };
  const handleChangeCu = (e) => {
    setCu(e.target.value);
  };
  const handleChangeFe = (e) => {
    setFe(e.target.value);
  };
  const handleChangeMn = (e) => {
    setMn(e.target.value);
  };
  const handleChangeNi = (e) => {
    setNi(e.target.value);
  };
  const handleChangeV = (e) => {
    setV(e.target.value);
  };
  const handleChangeNb = (e) => {
    setNb(e.target.value);
  };
  const handleChangeAverageDensity = (e) => {
    setAverageDensity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ram ram");
    setOutput(100);
  };

  return (
    <div classNameName="App">
      <h1>HEA-Hardness Predictor</h1>
      <div>
        <div className="input">
          <div className="each_box">
            <label>Al</label>
            <input type="number" value={Al} onChange={handleChangeAl}></input>
          </div>
          <div className="each_box">
            <label>Co</label>
            <input type="number" value={Co} onChange={handleChangeCo}></input>
          </div>
          <div className="each_box">
            <label>Cr</label>
            <input type="number" value={Cr} onChange={handleChangeCr}></input>
          </div>
          <div className="each_box">
            <label>Cu</label>
            <input type="number" value={Cu} onChange={handleChangeCu}></input>
          </div>
          <div className="each_box">
            <label>Fe</label>
            <input type="number" value={Fe} onChange={handleChangeFe}></input>
          </div>
        </div>
        <div className="input">
          <div></div>
          <div className="each_box">
            <label>Mn</label>
            <input type="number" value={Mn} onChange={handleChangeMn}></input>
          </div>
          <div className="each_box">
            <label>Ni</label>
            <input type="number" value={Ni} onChange={handleChangeNi}></input>
          </div>
          <div className="each_box">
            <label>V</label>
            <input type="number" value={V} onChange={handleChangeV}></input>
          </div>
          <div className="each_box">
            <label>Nb</label>
            <input type="number" value={Nb} onChange={handleChangeNb}></input>
          </div>
          <div className="each_box">
            <label>Average Density</label>
            <input
              type="number"
              value={AverageDensity}
              onChange={handleChangeAverageDensity}
            ></input>
          </div>
        </div>
      </div>
      <div className="outbox_box">
      <button onClick={handleSubmit}>Predict</button>

      <div className="output"> Predicted value: {Output} VHN</div>
      </div>
    </div>
  );
}

export default App;
