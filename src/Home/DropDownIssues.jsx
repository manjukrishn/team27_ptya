import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  margin: {
    width: "80%"
  }
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age, setAge] = React.useState("Enter age");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div style={{paddingTop:"10px"}}>
      <FormControl variant="outlined" className={classes.margin}>
        <InputLabel htmlFor="filled-age-native-simple" style={{marginTop:"5px"}}>Department</InputLabel>
        <Select value={age} onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Agriculture</MenuItem>
          <MenuItem value={20}>Health</MenuItem>
          <MenuItem value={30}>Revenue</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
