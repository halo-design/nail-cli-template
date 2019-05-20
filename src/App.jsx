import React from "react";
import { upcase } from "../src/libs/utils";
import txt from "./nail.txt";

const App = () => (
  <div className="app">
    <div className="logo" />
    <h1>${upcase(txt)}</h1>
  </div>
);

export default App;
