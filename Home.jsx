import React from "react";
import "./Home.css";
import Editor from "./Editor";
import Card from "./PostCard";

export default function Home() {
  const arr = [1, 3, 3, 4, 5, 67, 6, 68, 168, 468];
  return (
    <div id="home">
      <h2 className="home-heading">#agriculture</h2>
      <div className="home-subheading">50 complaints</div>
      <hr className="hr-home" />

      <div className="home-container">
        <div style={{marginLeft:"45%"}}>
          <div className="add-issue">+ New issue</div>
        </div>
        {arr.map((item, index) => {
          return <Card item={item} />;
        })}
        <p></p>
      </div>
    </div>
  );
}
