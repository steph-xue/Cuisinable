import React from "react";

function Landing() {
  return (
    <div className="landing-page">
      <h1 className="landing-title">Project title</h1>
      <img className="bear" src="/images/bear-chef.png" alt="bear chef" />
      <p className="description">description</p>
      <button className="start-button">Start</button>
    </div>
  );
}

export default Landing;