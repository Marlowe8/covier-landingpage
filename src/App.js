import React from "react";
import Header from "./components/header";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  );
}

export default App;
