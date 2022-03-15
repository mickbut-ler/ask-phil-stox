import React from "react";

import "../stylesheets/slider.css";

const Slider = () => {
  return (
    <div class="scrolling-wrapper">
      <div class="card">
        <h2>IMG</h2>
      </div>
      <div class="card">
        <h2>IMG</h2>
      </div>
      <div class="card">
        <h2>IMG</h2>
      </div>
      <div class="card">
        <h2>IMG</h2>
      </div>
      <div class="card">
        <h2>IMG</h2>
      </div>
      <div class="card">
        <h2>IMG</h2>
      </div>
      <div class="card">
        <h2>IMG</h2>
      </div>
      <div class="card">
        <h2>IMG</h2>
      </div>
      <div class="card">
        <h2>IMG</h2>
      </div>
    </div>
  );
};

export default Slider;

// Workflow slider section:
//  1. Set div with width and test if it is scrolling horizontal.
//  2. Create data object containing images url and title.
//  3. Map over data object returning image component passing the right data.
//  4. Remove with from test.
