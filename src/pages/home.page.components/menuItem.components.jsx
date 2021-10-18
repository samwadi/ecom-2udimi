import React from "react";
import "./homepage.styles.scss";
import { withRouter } from "react-router";
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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
export default withRouter(MenuItem);
