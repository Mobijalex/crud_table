import React, { useState, useEffect } from "react";
import "./filter.css";
import NewBtn from "../../components/create newBtn/NewBtn";

function Filter({ demoValue }) {
  console.log("demoValue,", demoValue);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = demoValue.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredData(filtered);
  }, [searchInput, demoValue]);

  return (
    <>
      <div className="filter">
        <div className="dropdown">
          <input
            className="inputbox"
            list="browsers"
            name="browser"
            placeholder="Search Name..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <datalist id="browsers">
            <option value="sarath" />
            <option value="Monu" />
            <option value="jino" />
          </datalist>
        </div>
        <div className="dropdown">
          <input
            className="inputbox"
            list="browsers"
            name="browser"
            placeholder="Search Email..."
          />
          <datalist id="browsers">
            <option value="sarath" />
            <option value="Monu" />
            <option value="jino" />
          </datalist>
        </div>
        <div className="dropdown">
          <input
            className="inputbox"
            list="browsers"
            name="browser"
            placeholder="Search Number..."
          />
          <datalist id="browsers">
            <option value="sarath" />
            <option value="Monu" />
            <option value="jino" />
          </datalist>
        </div>
        <div className="dropdown">
          <input
            className="inputbox"
            list="browsers"
            name="browser"
            placeholder="Search City..."
          />
          <datalist id="browsers">
            <option value="sarath" />
            <option value="Monu" />
            <option value="jino" />
          </datalist>
        </div>

        <div>
          <NewBtn />
        </div>
      </div>
    </>
  );
}

export default Filter;
