import React from "react";

function Landing() {
  return (
    <div className="landing-page">
      <h1 className="landing-title">Cuisinably</h1>
      <button className="start-button">Get Started</button>
      <img className="bear" src="/images/bear-chef.png" alt="bear chef" />
      <p className="description">Generate recipes based on food allergies and intolerances</p>
    </div>
  );
}

export default Landing;