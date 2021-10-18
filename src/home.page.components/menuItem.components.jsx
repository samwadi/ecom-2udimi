import React from "react";
import "./homepage.styles.scss";
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
        size,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="suptitle">shop now</span>
    </div>
  </div>
);
export default MenuItem;
