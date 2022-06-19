import React from "react";

function Tarea({ texto, id, eliminarItem }) {
  return (
    <li className="tarea">
      {texto}
      <button type="submit" onClick={() => eliminarItem(id)}>
        X
      </button>
    </li>
  );
}

export default Tarea;
