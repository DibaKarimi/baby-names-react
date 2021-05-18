import "./App.css";
import DisplayNames from "./DisplayNames";
import babyNames from "./babyNamesData.json";
import Search from "./Search";
import React, { useState } from "react";

function App() {
  const [searchResult, setSearchResult] = useState(babyNames);
  const [favoriteList, setFavoriteList] = useState([]);
  const addFavorite = (baby) => {
    setFavoriteList(favoriteList.concat(baby));
  };
  const removeFavorite = (baby) => {
    favoriteList.splice(favoriteList.indexOf(baby), 1);
    setFavoriteList(favoriteList);
    setSearchResult(searchResult.concat());
  };
  const search = (searchValue) => {
    let result = babyNames.filter((baby) =>
      baby.name.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchResult(result);
  };
  const filterBabyGender = (babyGender) => {
    console.log(babyGender);
    console.log(searchResult);
    let result = babyNames.filter((baby) => (baby.sex === babyGender));
    console.log(result);
    setSearchResult(result);
  };
  const resetAllBaby = () => {
    setSearchResult(babyNames);
    console.log(babyNames);
  };
  return (
    <div className="App">
      <section className="container m-5 main">
        <Search
          handleChangeInput={search}
          filterBabyGender={filterBabyGender}
          resetAllBaby={resetAllBaby}
        />
        <DisplayNames
          info={searchResult}
          favoriteNames={favoriteList}
          addFavoriteList={addFavorite}
          removeFavoriteList={removeFavorite}
        />
      </section>
    </div>
  );
}
export default App;
