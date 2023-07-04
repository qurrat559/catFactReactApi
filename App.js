import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  //using states
 const [catFact, setCatFact] = useState("")

 //function to fetch data using axios library
  const GenerateCatFact = () =>{
  Axios.get("https://catfact.ninja/fact").then((res) =>{
   setCatFact(res.data.fact);
  });
}

//using useEffect to run the api once when the button is clicked
useEffect(() => {
  GenerateCatFact();
}, [])
 
  return (
    <div className="App">
     
      <button onClick={GenerateCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;