import React from "react";
import "./App.css";
import styled from "styled-components";
import Image from "./Components/Image";

//ReactDOM.render(<nasaFooter />, document.getElementById("root"));


  


function App() {
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>

      <Image />
    </div>
  );
}

export default App;
