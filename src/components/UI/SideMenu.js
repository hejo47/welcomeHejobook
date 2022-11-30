import React from "react";
import classes from "./SideMenu.module.css";

const SideMenu = () => {
  return (
    <div className={classes.sideMenu_container}>
      <div className={classes.sideMenu_wrapper}>
        <ul className={classes.depth1}>
          <li>
            <span className={classes.depth1_title}>HTML</span>
            <ul className={classes.depth2}>
              <li>depth2</li>
              <li>depth2</li>
              <li>depth2</li>
            </ul>
          </li>
          <li>
            <span className={classes.depth1_title}>CSS</span>
            <ul className={classes.depth2}>
              <li>depth2</li>
              <li>depth2</li>
              <li>depth2</li>
            </ul>
          </li>
          <li>
            <span className={classes.depth1_title}>JAVASCRIPT</span>
            <ul className={classes.depth2}>
              <li>depth2</li>
              <li>depth2</li>
              <li>depth2</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
