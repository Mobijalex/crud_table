import React from "react";
import Container from "react-bootstrap/Container";
import "../filter/filter.css";
import NewBtn from "../../create newBtn/NewBtn";

function Filter() {
  return (
    <>
      <Container className="filter">
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
      </Container>
    </>
  );
}

export default Filter;
