import React from "react";
import "./filter.css";
import NewBtn from "../../components/create newBtn/NewBtn";

function Filter() {
  return (
    <>
      <div className="filter">
        <div className="dropdown">
          <input
            className="inputbox"
            list="browsers"
            name="browser"
            placeholder="Search Name..."
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
