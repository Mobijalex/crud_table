import Table from "./components/table/Table";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/table" Component={Table} />
      </Routes>
    </Router>
  );
}

export default App;
