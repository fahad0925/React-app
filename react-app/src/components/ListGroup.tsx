import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedText, setSelectedText] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No List Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedText === index
                ? "list-group-item  active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedText(index);
              onSelectItem(item);
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
export default ListGroup;
