import { useState } from "react";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Pakistan", "China", "Afganistan", "Indonesia"];
  const [selectedText, setSelectedText] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No List Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedText === index
                ? "list-group-item  active"
                : "list-group-items"
            }
            key={item}
            onClick={() => {
              setSelectedText(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* <button
        onClick={() => setValue(value + 1)}
        type="button"
        className="btn btn-primary"
      >
        Increase
      </button>
      <button
        onClick={() => setValue(value - 1)}
        type="button"
        className="btn btn-secondary"
      >
        Decrease
      </button>
      <button
        onClick={() => setValue(0)}
        type="button"
        className="btn btn-danger"
      >
        reset
      </button>
      {value} */}
    </>
  );
}
export default App;
