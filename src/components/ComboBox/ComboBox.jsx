import React from "react";
import { Link } from "react-router-dom";

const ComboBox = () => {
  const options = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

  return (
    <>
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Seleccione
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {options.map((e, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={`/categoria/${e}`}>
                {e}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ComboBox;
