import { useImmer } from "use-immer";
import React, { useState } from "react";
import "./App.css";
import "react-date-picker/dist/DatePicker.css";
import { GithubPicker } from "react-color";

import examples from "./examples.json";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Display from "./components/Display";
import FabButtons from "./components/Fabbuttons";
import Profile from "./components/Profile";
import Author from "./components/Author";
function App() {
  const [examplesIndex, setExamplesIndex] = useState(0);
  const [cv, setCv] = useImmer(examples[examplesIndex]);
  const [color, setColor] = useState("#fff");
  const [secondColor, setSecondColor] = useState("#fff");

  const handleMoreExample = () => {
    setExamplesIndex((prevIndex) => (prevIndex + 1) % examples.length);
    setCv(examples[examplesIndex]);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const handleSecondChangeComplete = (color) => {
    // New handler for the second color
    setSecondColor(color.hex);
  };

  return (
    <>
      <div className="header">
        <h1>CV GENERATOR</h1>
      </div>
      <div className="main">
        <div className="left">
          <General cv={cv} setCv={setCv} />
          <Education cv={cv} setCv={setCv} />
          <Experience cv={cv} setCv={setCv} />
          <Profile cv={cv} setCv={setCv} />
        </div>

        <Display
          cv={cv}
          styleGeneral={{ backgroundColor: color }}
          styleProfile={{ backgroundColor: secondColor }}
        />
      </div>
      <FabButtons cv={cv} setCv={setCv} handleMoreExample={handleMoreExample} />
      <div className="footer">
        <Author />
        <div className="colorPickers">
          <GithubPicker color={color} onChangeComplete={handleChangeComplete} />
          <GithubPicker
            color={secondColor}
            onChangeComplete={handleSecondChangeComplete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
