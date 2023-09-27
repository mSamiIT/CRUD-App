import { ajaxPrefilter } from "jquery";
import "./index.css";
import { useReducer, useRef, useState, useEffect } from "react";

// Card Component
function Card({
  textRef,
  arrtext,
  setArrText,
  proptext,
  propindex,
  forEdit,
  setForEdit,
}) {
  // const [editVar, setEditVar] = useState(null);

  const handlerDelete = (id) => {
    const array = arrtext.filter((arrtext, i) => id - 1 !== i);
    setArrText(array);
  };

  const handlerEdit = (id, proptext) => {
    // console.log(forEdit);

    setForEdit(id);
    // console.log(forEdit);

    textRef.current.value = proptext;
  };

  return (
    <>
      <div className="card">
        <div>
          <p className="paraText">{proptext}</p>
          <p>{propindex}</p>
          <button className="delete" onClick={() => handlerDelete(propindex)}>
            Delete
          </button>
          <button
            className="edit"
            onClick={() => handlerEdit(propindex, proptext)}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
