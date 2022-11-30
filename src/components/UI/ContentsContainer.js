import React from "react";
import classes from "./ContentsContainer.module.css";
import ContentsDesc from "./contentsUI/ContentsDesc";
import ContentsTitle from "./contentsUI/ContentsTitle";

const ContentsContainer = () => {
  return (
    <div className={classes.content_container}>
      <ContentsTitle />
      <ContentsDesc></ContentsDesc>
    </div>
  );
};

export default ContentsContainer;
