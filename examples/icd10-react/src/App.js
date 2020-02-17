import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as icd10 from "icd10";

function App() {
  console.log("test");

  return (
    <div className="App">
      <section>{JSON.stringify(icd10.find("U84.7"))}</section>
    </div>
  );
}

export default App;
