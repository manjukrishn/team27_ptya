import React from "react";
import "./Rightbar.css";
import Avatar from "@material-ui/core/Avatar";

export default function Rightbar() {
  return (
    <div id="rightbar-container">
      <div className="inside-container">
        <Avatar alt="profile_image" src="" className="avatar" />
        <h3 className="text-right">Name : ManjuKrishna</h3>
        <h3 className="text-right1">Department : Agriculture </h3>
      </div>
    </div>
  );
}
