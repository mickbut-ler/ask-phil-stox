import React from "react";

const Image = ({ imageUrl, title }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(18, 18, 18, 0), rgba(18, 18, 18, 0), rgba(18, 18, 18, 0.4)), url(${imageUrl})`,
        height: `250px`,
        width: `200px`,
        objectFit: `scale-down`,
        margin: `2px`,
        position: `relative`,
        filter: `grayscale(50%)`,
      }}
    >
      <h2
        style={{
          color: `white`,
          position: `absolute`,
          bottom: `4vw`,
          left: `4vw`,
          fontSize: `4vw`,
          letterSpacing: `0.025rem`,
        }}
      >
        {title}
      </h2>
    </div>
  );
};

export default Image;
