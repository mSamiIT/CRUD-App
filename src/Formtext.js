import "./index.css";
import { useReducer, useRef, useState, useEffect } from "react";
import Card from "./Card";

// FormText Component
function Formtext({ arrtext, setArrText }) {
  const textRef = useRef("");
  // for editing
  const [forEdit, setForEdit] = useState(null);

  const handleMessageChange = (event) => {
    event.preventDefault();

    // console.log(forEdit);

    if (forEdit == null) {
      setArrText([...arrtext, textRef.current.value]);
      console.log(arrtext);
      // console.log(textRef.current.value);
      textRef.current.value = "";
    } else {
      let index = forEdit - 1;
      let newArr = Array.from(arrtext);
      console.log(newArr);
      newArr[index] = textRef.current.value;
      setArrText(newArr);
      textRef.current.value = "";
      setForEdit(null);
    }
  };
  return (
    <div>
      <form>
        <textarea id="message" name="message" ref={textRef}></textarea>

        <button onClick={handleMessageChange} className="edit">
          Add Text
        </button>
      </form>

      {arrtext.map((arrItem, i) => (
        <Card
          textRef={textRef}
          arrtext={arrtext}
          setArrText={setArrText}
          proptext={arrItem}
          propindex={i + 1}
          forEdit={forEdit}
          setForEdit={setForEdit}
        />
      ))}
    </div>
  );
}

export default Formtext;
