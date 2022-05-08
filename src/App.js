import "./App.css";
import Fetch from "./components/Fetch";
import Issues from "./components/Issues";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Fetch />
    <Routes>
    <Route exact path='/issues/:issuesId' element={<Issues/>}></Route>
    </Routes>
      </Router>
    </div>
  );
}

export default App;
