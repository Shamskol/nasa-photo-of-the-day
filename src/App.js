import React, {useEffect, useState} from "react";
import "./App.css";

import Image from "./Components/Image";
import axios from "axios";
import ImageCard from "./Components/ImageCard";
//ReactDOM.render(<nasaFooter />, document.getElementById("root"));



function App() {

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      
    <ImageCard/>
    <Image/>
    </div>
  );
}



// useEffect(() => {
//   axios.get("https://api.nasa.gov/planetary/apod?api_key=qXLpqmbeN47dAcgvn32ZYVnSwuJVTEwTY5rbAtIC")
//   .then(res => {
//     debugger
//     console.log(res.data);
//   })

//   .catch(err => {

//     console.log("The data was not returned")
//   })

// console.log("App component mounted.");

//   () =>{


// console.log("App component unmounting...");

// }



// }, [])




//  return (
//     <div className="App">
      
//       <p>
//         Read through the instructions in the README.md file to build your NASA
//         app! Have fun 🚀!
//       </p>
//     </div>
//   );
 
 
export default App;
 
