import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

// ES7 snippets to do 'rfce'

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://www.starlabgroup.com/media//wysiwyg/Pipette.png"
          title="Mail-In Pipette Servicing"
          description="Choose from our Standard Service with a 5-working day turnaround*"
        />
        <Card
          src="https://www.starlabgroup.com/media//wysiwyg/Pipette.png"
          title="On-Site Pipette Servicing"
          description="Clinic scheduling service available for large clinics"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://www.starlabgroup.com/media/catalog/product/ImagesPNG/std.lang.all/160457.png"
          title="Standard Servicing Levels"
          description="As Found | Service & cal | Quick Cal"
          price="From £17.47 per pipette"
        />
        <Card
          src="https://www.starlabgroup.com/media/catalog/product/ImagesPNG/eng/628504.png"
          title="UKAS Calibration"
          description="As Found | Service & UKAS Cal | Pre & Post"
          price="From £20.75 per pipette"
        />

        <Card
          src="https://www.starlabgroup.com/media//wysiwyg/StarlabGreenTeam-2.png"
          title="Balance Calibration"
          description="STARLAB can come on-site to calibrate laboratory balances in the range of 0.001 mg to 10 kg"
          price="From £45"
        />
      </div>
    </div>
  );
}

export default Home;
