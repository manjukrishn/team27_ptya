import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ArrowDropDown";
import ExpandLessIcon from "@material-ui/icons/ArrowDropUp";
import "./Navbar.css";

export default function Navbar() {
  const items = [
    {
      heading: "Departments",
      lists: [
        "agriculture",
        "food",
        "revenue",
        "education",
        "health",
        "transport",
        "small scale industry",
        "women and child empowerement",
        "railway",
        "finance",
        "large scale industry",
        "defence"
      ]
    },
    {
      heading: "Issue status",
      lists: ["solved", "unsolved"]
    }
  ];

  const [dropdown, setDropDown] = React.useState({});
  function collapser(index) {
    const height = document.getElementById("sil" + index).style.maxHeight;
    if (height === "0px") {
      document.getElementById("sil" + index).style.maxHeight = "250px";
      setDropDown({ ...dropdown, [index]: "250px" });
    } else {
      document.getElementById("sil" + index).style.maxHeight = "0px";
      setDropDown({ ...dropdown, [index]: "0px" });
    }
  }
  return (
    <div id="navbar-container">
      <ul>
        <li>
          <h2>Manjukrishna</h2>
          <div className="profile-dept">Agriculture department</div>
        </li>
        <hr />
        <div id="sidebar-container-item-list">
          {items.map((item, index) => {
            return (
              <div>
                <table style={{ marginTop: "20px", marginLeft: "10px" }}>
                  <tr onClick={() => collapser(index)}>
                    <td>
                      {dropdown[index] === "0px" ? (
                        <ExpandMoreIcon style={{ cursor: "pointer" }} />
                      ) : (
                        <ExpandLessIcon style={{ cursor: "pointer" }} />
                      )}
                    </td>
                    <h3>{item.heading}</h3>
                  </tr>
                </table>
                <div className="sidebar-item-list" id={"sil" + index}>
                  {item.lists.map((it, index) => {
                    return (
                      <li id="items">
                        <table>
                          <tr>
                            <td>#</td>
                            <td>
                              <div className="dept-sidebar">{it}</div>
                            </td>
                          </tr>
                        </table>
                      </li>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
}
