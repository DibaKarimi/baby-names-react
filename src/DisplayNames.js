import React, { useState } from "react";
import FavoriteList from "./FavoriteList";

const DisplayNames = (props) => {
  const [favoriteList, setFavoriteList] = useState([]);
  const babyNames = []
    .concat(props.info)
    .sort((a, b) => (a.name > b.name ? 1 : -1));
  const [babyList, setBabyList] = useState(babyNames);
  //console.log(babyList);
  // console.log(babyNames);
  const addFavorite = (baby) => {
    setFavoriteList(favoriteList.concat(baby));
  };
  const removeFavorite = (baby) => {
    favoriteList.splice(favoriteList.indexOf(baby), 1);
    setBabyList(babyList.concat());
  };

  return (
    <div>
      <div>
        <span>Favorites:</span>
        <FavoriteList favoritesName={favoriteList} onClick={removeFavorite} />
      </div>
      <div className="container mx-auto my-4 w-75 displayName pt-5">
        {babyList
          .filter((baby) => !favoriteList.includes(baby))
          .map((baby, index) => {
            return (
              <span
                key={index}
                onClick={function () {
                  addFavorite(baby);
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
    </div>
  );
};
export default DisplayNames;
