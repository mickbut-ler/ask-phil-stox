import React from "react";

const Image = ({ imageUrl, title }) => {
  // let url =
  //   "https://images.ctfassets.net/kpep6ikljkgq/4yWNuBLvluRUKgT3Yd0SAV/d4d5e5e28a3a7418d31e1a30ff9b7950/everyday-desktop.jpg?w=250&h=250&q=50&fm=webp";
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.3)), url(${imageUrl})`,

        // backgroundImage: `url(${imageUrl})`,
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
