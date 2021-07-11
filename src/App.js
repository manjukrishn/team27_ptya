import "./styles.css";
import Entry from "./Entry";
import Login from "./Login/Login";
import PublicRoute from "./PublicRoute";
import firebase from "./firebase";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PublicRoute
            restricted={false}
            component={Login}
            path="/login"
            exact
          />
          <PrivateRoute component={Entry} path="/:dept" exact />
        </Switch>
      </Router>
    </div>
  );
}
