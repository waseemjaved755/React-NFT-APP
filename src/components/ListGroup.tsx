import { Fragment } from "react";

function ListGroup() {
  let Items = ["Lahore", "Karachi", "Multan"];

  return (
    <>
      <h1> List </h1>
      {Items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {Items.map((Items, index) => (
          <li
            className="list-group-items"
            key={Items}
            onClick={() => console.log(Items, index)}
          >
            {Items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
