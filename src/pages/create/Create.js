import React, { useState } from "react";
import "./create.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Create() {
  return (
    <div className="create_container m-3">
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
        <div className="create_dropdown">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Create;
