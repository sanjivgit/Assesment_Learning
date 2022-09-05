import React, { useState } from "react";
import "./create.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Create() {
  return (
    <div className="create_wrap w-100 h-100">
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
      <div className="d-flex justify-content-center align-item-center">
        <div className="create_dropdown gap-2 d-flex flex-wrap mt-5">
          <Form.Select size="lg" className="col-md-3">
            <option value="0">Select class</option>
            <option value="0">Moke Test</option>
            <option value="1">Quiz</option>
            <option value="2">Internal Test</option>
            <option value="3">Class Test</option>
            <option value="3">Revision Test</option>
          </Form.Select>
          <Form.Select size="lg" className="col-md-3">
            <option>Select section</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select size="lg" className="col-md-5 ">
            <option>Select subject</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select size="lg" className="col-md-11">
            <option>Select Assessment type</option>
            <option value="0">Moke Test</option>
            <option value="1">Quiz</option>
            <option value="2">Internal Test</option>
            <option value="3">Class Test</option>
            <option value="3">Revision Test</option>
          </Form.Select>
        </div>
      </div>
      <Link to="/create">
        <button className="btn create_button">Next</button>
      </Link>
    </div>
  );
}

export default Create;
