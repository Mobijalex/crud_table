import React from "react";
import "./home.css";

import NavBar1 from "../navbar/NavBar1";

function Home() {
  return (
    <div>
      <NavBar1 />
      <div className="homeContainer">
        <h1>The Crud Project</h1>
      </div>
    </div>
  );
}

export default Home;
