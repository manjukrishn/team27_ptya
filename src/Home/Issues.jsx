import React from "react";
import TextField from "@material-ui/core/TextField";
import DropDown from "./DropDownIssues";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Checkbox from "@material-ui/core/Checkbox";

function Issues() {
  const useStyles = makeStyles((theme) => ({
    margin: {
      width: "80%"
    }
  }));
  const [checked, setChecked] = React.useState(true);

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();
  const [age, setAge] = React.useState("Enter age");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div style={{ marginLeft: "20%", marginTop: "5%" }}>
      <div style={{ paddingTop: "10px" }}>
        <FormControl variant="outlined" className={classes.margin}>
          <Select value={age} onChange={handleChange}>
            <MenuItem value="Department">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Agriculture</MenuItem>
            <MenuItem value={20}>Health</MenuItem>
            <MenuItem value={30}>Revenue</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows="10"
        placeholder="Enter your Complaint"
        variant="outlined"
        style={{ width: "80%", marginTop: "20px", zIndex: "1" }}
      />
      <div style={{ marginTop: "10px" }}>
        <Checkbox
          checked={checked}
          onChange={handleChangeCheck}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <span style={{ fontWeight: "660" }}>Make post public</span>
      </div>
    </div>
  );
}

export default Issues;
