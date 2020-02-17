import React from "react";
import "./App.css";
import * as icd10 from "icd10";

function App() {
  console.log("test");

  return (
    <div className="App">
      <section>{JSON.stringify(icd10.getChapterList())}</section>
    </div>
  );
}

export default App;
