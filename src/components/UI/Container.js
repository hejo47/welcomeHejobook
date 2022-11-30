import React from "react";
import classes from "./Container.module.css";
import ContentsContainer from "./ContentsContainer";
import Header from "./Header";
import SideMenu from "./SideMenu";

const Container = (props) => {
  return (
    <div className={classes.container}>
      <Header />
      <SideMenu />
      <ContentsContainer />
    </div>
  );
};

export default Container;
