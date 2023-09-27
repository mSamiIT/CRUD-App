import { useReducer, useRef, useState, useEffect } from "react";
import Formtext from "./Formtext";
import "./index.css";

let updatedIndex;

function App() {
  const [arrtext, setArrText] = useState(
    localStorage.getItem("myArr")
      ? // string -> arr
        JSON.parse(window.localStorage.getItem("myArr"))
      : []
  );

  useEffect(() => {
    console.log(arrtext);
    // arr- > string
    localStorage.setItem("myArr", JSON.stringify(arrtext));
  }, [arrtext]);

  return (
    <>
      <Formtext arrtext={arrtext} setArrText={setArrText} />
    </>
  );
}

export default App;
