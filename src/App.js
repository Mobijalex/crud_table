import Table from "./components/table/Table";
import "./App.css";
import Filter from "./components/filter/Filter";
import NavBar1 from "./components/navbar/NavBar1";

function App() {
  return (
    <div className="App">
      <NavBar1 />
      <Filter />
      <Table />
    </div>
  );
}

export default App;
