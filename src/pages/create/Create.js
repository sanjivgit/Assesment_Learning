import React, { useState } from "react";
import "./create.css";
import Form from "react-bootstrap/Form";

function Create() {
  return (
    // <div className="">
    <div className="create_wrap w-100">
      <div className="assessment_details d-flex flex-column">
        <div className="d-flex">
          <input
            className="assessment_input mb-3"
            style={{ minWidth: "25%" }}
            type="text"
            placeholder="Enter assessment name"
          />
          <img className="ml-2" src="/images/assessment.svg" alt="" />
        </div>
        <div className="d-flex align-items-center">
          <input
            className="assessment_input mb-3"
            style={{ minWidth: "50%" }}
            type="text"
            placeholder="Enter assessment description"
          />
          <img className="ml-2" src="/images/assessment.svg" alt="" />
        </div>
      </div>
      <div className="create_dropdown d-flex flex-wrap ">
        <Form.Select size="md" className="col-md-3 m-1">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select size="md" className="col-md-3 m-1">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select size="md" className="col-md-3 m-1">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
    </div>
    // </div>
  );
}

export default Create;
