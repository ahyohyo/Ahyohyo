import "./App.css";
import { useEffect, useState } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  useEffect( () => {
    const intervalID = setInterval( () => {
      console.log("5secons");
    }, 5000);
    
    return () => {
      console.log("cleanup!");
      clearInterval(intervalID);
    };
  });


  return (
    <div className="App">
      <header>
        <h1>Simple Counter</h1>
      </header>
      <section>
        <Viewer count ={count}/>
      </section>
      <section>
        <Controller handleSetCount = {handleSetCount} />
      </section>
    </div>
  );
}

export default App;