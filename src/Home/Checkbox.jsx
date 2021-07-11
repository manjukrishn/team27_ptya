import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <span style={{ fontWeight: "660" }}>Make post public</span>
    </div>
  );
}
