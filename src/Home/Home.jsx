import React from "react";
import "./Home.css";
import Editor from "./NewIssue";
import Card from "./PostCard";
import { isOfficer } from "../utils";
import { useLocation } from "react-router-dom";

export default function Home() {
  const arr = [1, 3, 3, 4, 5, 67, 6, 68, 168, 468];
  const location = useLocation();
  const [homeheading, setHomeHeading] = React.useState(
    location.pathname.substr(1)
  );
  return (
    /* nanna phone sari ella code email madiddene */
    /*iddake haaku*/
    /* neenu edit maadtha iddi alla???*/
    <div id="home">
      <h2 className="home-heading">#{homeheading}</h2>
      <div className="home-subheading">50 complaints</div>
      <hr className="hr-home" />
      <div className="home-container">
        {location.pathname !== "/issue-of-your-department" &&
          location.pathname !== "/my-issues" && <Editor />}
        <div style={{marginTop:"15px"}}>
          {arr.map((item, index) => {
            return (
              <div>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
