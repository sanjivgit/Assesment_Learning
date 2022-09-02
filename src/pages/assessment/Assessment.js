import React from "react";
import "./assessment.css";
import { Link } from "react-router-dom";

function Assessment() {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column align-items-center">
        <h3 className="m-0">Create a assessment</h3>
        <span className="m-2 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ab
          vitae hic officiis?
        </span>
        <Link to="/create">
          <button className="btn create_button">Create</button>
        </Link>
      </div>
    </div>
  );
}

export default Assessment;
