import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import Tarea from "./Tarea.js";

export default function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState(``);

  function agregarItem(e) {
    e.preventDefault();
    const nuevoItem = {
      id: uuidv4(),
      texto: input
    };
    setItems([nuevoItem.texto, ...items]);
  }

  function agregarInput(e) {
    setInput(e.target.value);
  }

  function eliminarItem(id) {
    const nuevosItems = items.filter((item) => item.id !== id);
    console.log(id);
    setItems(nuevosItems);
  }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setInput(e.target.elements.inputElement.value);
  // }

  return (
    <div className="App">
      <form>
        <input id="inputElement" type="text" onChange={agregarInput} />
        <button id="submitElement" onClick={agregarItem}>
          Agregar
        </button>
      </form>
      <ul id="task-list">
        {items.map((item) => (
          <Tarea
            texto={item}
            id={nuevoItem.id}
            key={nuevoItem.id}
            eliminarItem={eliminarItem}
          />
        ))}
      </ul>
    </div>
  );
}
