import React, { useEffect, useState } from "react";

function FirstComp() {
  const [demoValue, setDemoValue] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      fetchData();
    }
  }, [buttonClicked]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/users");
      const jsonData = await response.json();
      setDemoValue(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // My Consoles
  console.log("buttonClicked", buttonClicked);
  console.log("demoValue", demoValue);

  return (
    <div
      style={{
        height: "auto",
        width: "50%",
        padding: "50px 50px",
      }}
    >
      <div>
        <button
          style={{
            padding: "10px",
            background: "orange",
            marginBottom: "20px",
            marginRight: "20px",
          }}
          onClick={() => setButtonClicked(true)}
          // onClick={fetchData}
        >
          Click Me
        </button>

        <button
          style={{
            padding: "10px",
            background: "orange",
            marginBottom: "20px",
          }}
        >
          Second Button
        </button>
      </div>

      <div>
        {demoValue.map((item) => {
          return (
            <>
              <div
                key={item.id}
                style={{
                  border: "1px solid",
                  padding: "20px",
                }}
              >
                <div>
                  <b>ID: </b> {item.id}
                </div>
                <div>
                  <b>USERNAME: </b> {item.username}
                </div>
                <div>
                  <b>FIRSTNAME: </b> {item.name.firstname}
                </div>
                <div>
                  <b>LASTNAME: </b> {item.name.lastname}
                </div>
                <div>
                  <b>EMAIL: </b> {item.email}
                </div>
                <div>
                  <b>PHONE: </b> {item.phone}
                </div>
                <div>
                  <b>CITY: </b> {item.address.city}
                </div>
                <div>
                  <b>LONG: </b> {item.address.geolocation.long}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default FirstComp;
