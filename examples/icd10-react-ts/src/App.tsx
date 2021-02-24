import React from "react";
import "./App.css";
import * as icd10 from "icd10";

const App = () => {
  return <div className="App">{icd10.getBlockList()}</div>;
};

export default App;
