import React from "react";
import classes from "./ContentsContainer.module.css";
import ContentsDesc from "./contentsUI/ContentsDesc";
import ContentsTitle from "./contentsUI/ContentsTitle";
import ContentsWrapper from "./contentsUI/ContentsWrapper";

const ContentsContainer = () => {
  return (
    <div className={classes.content_container}>
      <ContentsTitle />
      <ContentsDesc />
      <ContentsWrapper></ContentsWrapper>
    </div>
  );
};

export default ContentsContainer;
