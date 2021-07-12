/** @format */
import React from "react";
import "./Issues.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "80%",
    marginBottom: 30,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Issues() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className="container">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Department</InputLabel>
          <NativeSelect className={classes.selectEmpty}>
            <option aria-label="None" value="" />
            <option value={10}>Agriculture</option>
            <option value={20}>food</option>
            <option value={30}>revenue</option>
            <option value={30}>education</option>
            <option value={30}>health</option>
            <option value={30}>transport</option>
            <option value={30}>small scale industry</option>
            <option value={30}>Women and child empowerement</option>
          </NativeSelect>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Complaint Type</FormLabel>
          <RadioGroup row aria-label="gender" name="gender1">
            <FormControlLabel
              value="public"
              control={<Radio />}
              label="Public"
              style={{ paddingRight: 50 }}
            />
            <FormControlLabel
              value="Private"
              control={<Radio />}
              label="Private"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-multiline-static"
          label="Complaint"
          multiline
          rows={22}
          placeholder="Enter your Complaint"
          variant="outlined"
          style={{ width: "80%" }}
        />
        <Button variant="contained" color="primary" style={{ marginTop: 30 }}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Issues;
