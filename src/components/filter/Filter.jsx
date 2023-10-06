import React, { useState, useEffect } from "react";
import "./filter.css";
import NewBtn from "../../components/create newBtn/NewBtn";

function Filter({ demoValue, handleFilterChange }) {
  // console.log("demoValue,", demoValue);
  const [nameInput, setNameInput] = useState("");

  const handleChangeName = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setNameInput(searchTerm);

    // Filter the data based on the search term
    const filteredResults = demoValue.filter((item) => {
      if (typeof item === "") {
        return item.toLowerCase().includes(searchTerm);
      }
      return false;
    });
    handleFilterChange(filteredResults);
  };

  return (
    <>
      <div className="filter">
        <div className="dropdown">
          <input
            className="inputbox"
            type="text"
            name="browser"
            placeholder="Search Name..."
            value={nameInput}
            onChange={handleChangeName}
          />
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
