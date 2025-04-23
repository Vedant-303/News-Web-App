import React from "react";

const Skeleton = ({ type }) => {
  const classes = type === "big" ? "skeleton big" : "skeleton small";

  return (
    <div className={classes}>
      <div className="skeleton-img"></div>
      <div className="skeleton-text">
        <div className="line title"></div>
        <div className="line"></div>
        {/* <div className="line"></div> */}
      </div>
    </div>
  );
};

export default Skeleton;
