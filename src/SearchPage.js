import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>As Found · Service & Calibration · UKAS</p>
        <h1>Technicians nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of pipette</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Standard</Button>
        <Button variant="outlined">UKAS</Button>
      </div>
      <SearchResult
        img="https://www.starlabgroup.com/media//wysiwyg/Pipette.png"
        location="London"
        title="Standard As Found Calibration Pipette Calibration"
        description="Provides a check on the performance of your pipette, prior to servicing or as part of your regular checks"
        star={4.73}
        price="From £18.56 / pipette"
        total="TBC"
      />
      <SearchResult
        img="https://www.starlabgroup.com/media//wysiwyg/Pipette.png"
        location="London"
        title="Standard As Found Calibration Pipette Calibration"
        description="Provides a check on the performance of your pipette, prior to servicing or as part of your regular checks"
        star={4.73}
        price="From £18.56 / pipette"
        total="TBC"
      />
      <SearchResult
        img="https://www.starlabgroup.com/media//wysiwyg/Pipette.png"
        location="London"
        title="Standard As Found Calibration Pipette Calibration"
        description="Provides a check on the performance of your pipette, prior to servicing or as part of your regular checks"
        star={4.73}
        price="From £18.56 / pipette"
        total="TBC"
      />
      <SearchResult
        img="https://www.starlabgroup.com/media//wysiwyg/Pipette.png"
        location="London"
        title="Standard As Found Calibration Pipette Calibration"
        description="Provides a check on the performance of your pipette, prior to servicing or as part of your regular checks"
        star={4.73}
        price="From £18.56 / pipette"
        total="TBC"
      />{" "}
      <SearchResult
        img="https://www.starlabgroup.com/media//wysiwyg/Pipette.png"
        location="London"
        title="Standard As Found Calibration Pipette Calibration"
        description="Provides a check on the performance of your pipette, prior to servicing or as part of your regular checks"
        star={4.73}
        price="From £18.56 / pipette"
        total="TBC"
      />
      <SearchResult
        img="https://www.starlabgroup.com/media//wysiwyg/Pipette.png"
        location="London"
        title="Standard As Found Calibration Pipette Calibration"
        description="Provides a check on the performance of your pipette, prior to servicing or as part of your regular checks"
        star={4.73}
        price="From £18.56 / pipette"
        total="TBC"
      />
      <SearchResult
        img="https://www.starlabgroup.com/media//wysiwyg/Pipette.png"
        location="London"
        title="Standard As Found Calibration Pipette Calibration"
        description="Provides a check on the performance of your pipette, prior to servicing or as part of your regular checks"
        star={4.73}
        price="From £18.56 / pipette"
        total="TBC"
      />
    </div>
  );
}

export default SearchPage;
