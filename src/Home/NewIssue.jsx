import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import firebase from "firebase";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Checkbox from "@material-ui/core/Checkbox";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    padding: "0px 15px"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  margin: {
    width: "80%"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const [text, setTextChange] = React.useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const textChange = (e) => {
    setTextChange(e.target.value);
  };

  const [age, setAge] = React.useState("Enter age");
  const handleSave = () => {
    firebase
      .database()
      .ref("posts/" + Date.now().toString())
      .set({
        description: text,
        user: localStorage.getItem("name"),
        department:age,
        priavate:checked
      });
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div style={{ marginLeft: "40%" }} onClick={handleClickOpen}>
        <div className="add-issue">
          <span style={{ marginRight: "8px" }}> + </span> New issue
        </div>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Add new issue
            </Typography>
            <Button
              autoFocus
              style={{ color: "white", fontWeight: "660" }}
              onClick={handleSave}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>

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
            value={text}
            rows="10"
            onChange={textChange}
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
      </Dialog>
    </div>
  );
}
