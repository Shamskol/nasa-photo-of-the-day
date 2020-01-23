import React, {Component} from "react";

import "./App.css";
import Date from "./Components/Date.js";
import Header from "./Components/Header.js";
import Images from "./Components/Images.js";
import nasadata from "./Components/nasadata.js";




class App extends Component {
render()

return (
<div>

<h1>NASA Photo of the Day</h1>
<Date/>
<Image/>





</div>






)


}

function App() {

useEffect(() => {

console.log("App component mounted.");

  return () =>{


console.log("App component unmounting...");

}



}, [


])




 /* return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}*/

export default App;
