import React from "react";
import { imagesData } from "../data/stoxImagesObject";
import Image from "./Image";

import "../stylesheets/slider.css";

const Slider = () => {
  console.log(imagesData);
  return (
    <div className="scrolling-wrapper">
      {imagesData.map((image, index) => (
        <div className="card">
          <Image key={index} imageUrl={image.imageUrl} title={image.title} />
        </div>
      ))}
    </div>
  );
};

export default Slider;

// Workflow slider section:
//  1. Set div with width and test if it is scrolling horizontal.
//  2. Create data object containing images url and title.
//  3. Map over data object returning image component passing the right data.
//  4. Remove with from test & and fix filter
