import React from "react";

const FavoriteList = (props) => {
  return (
    <div>
      {props.favoritesName.map((baby, index) => {
        return (
          <span
            key={index}
            onClick={function () {
              props.onClick(baby);
            }}
            className={
              baby.sex === "f"
                ? " d-inline-flex p-1 m-1 rounded female"
                : "d-inline-flex rounded p-1 m-1 male"
            }
          >
            {baby.name}
          </span>
        );
      })}
    </div>
  );
};
export default FavoriteList;
