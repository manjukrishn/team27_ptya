import React from "react";
import TextField from "@material-ui/core/TextField";
import DropDown from "./DropDownIssues";
import Checkbox from "./Checkbox";

function Issues() {
  return (
    <div style={{ marginLeft: "20%", marginTop: "5%" }}>
      <DropDown />
      <TextField
        id="outlined-multiline-static"
        multiline
        rows="10"
        placeholder="Enter your Complaint"
        variant="outlined"
        style={{ width: "80%", marginTop: "20px", zIndex: "1" }}
      />
      <Checkbox/>
    </div>
  );
}

export default Issues;
