import React from "react";
import "./Home.css";
import Editor from "./NewIssue";
import Card from "./PostCard";
import { useLocation } from "react-router-dom";

import db from "../firebase";
export default function Home() {
  const [arr, setArrr] = React.useState([]);
  const location = useLocation();
  const [homeheading, setHomeHeading] = React.useState(
    location.pathname.substr(1)
  );

  React.useEffect(() => {
    const arrb = [];
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          arrb.push({
            id: doc.id,
            description: doc.data().description,
            user: doc.data().dser,
            department: doc.data().department,
            private: doc.data().private
          });
        });
        setArrr(arrb);
      });
  }, []);
  return (
    <div id="home">
      <h2 className="home-heading">#{homeheading}</h2>
      <div className="home-subheading">50 complaints</div>
      <hr className="hr-home" />
      <div className="home-container">
        {location.pathname !== "/issue-of-your-department" &&
          location.pathname !== "/my-issues" && <Editor />}
        <div style={{ marginTop: "15px" }}>
          {arr.map((item, index) => {
            return (
              <div>{!!(item.private !== "false") && <Card item={item} />}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
