import React, { useState } from "react";
import "./Banner.css";
import Button from "@mui/material/Button";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Our Pipette Servicing</h1>
        <br></br>

        <h4>
          Our team of fully-trained technicians can service and calibrate ALL
          brands of pipette: single and multi-channel, manual and electronic,
          repeaters, pipette controllers and bottle-top dispensers.
        </h4>
        <br></br>

        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Options
        </Button>
      </div>
    </div>
  );
}

export default Banner;
