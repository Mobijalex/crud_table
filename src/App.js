import "./App.css";
import NavBar1 from "./components/navbar/NavBar1";
import Filter from "./components/navbar/filter/Filter";
import Table from "./components/navbar/table/Table";

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
