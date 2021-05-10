import "./App.css";
import DisplayNames from "./DisplayNames";
import babyNames from "./babyNamesData.json";
import Search from "./Search";
import React, { useState } from "react";

function App() {
  const [searchResult, setSearchResult] = useState(babyNames);
  const [babyList, setBabyList] = useState(babyNames);
  const search = (searchValue) => {
    let result = babyList.filter((baby) =>
      baby.name.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchResult(result);
  };
  const filterBabyGender = (babyGender) => {
    let result = babyList.filter((baby) => (baby.sex = babyGender));
    setSearchResult(result);
  };
  const resetAllBaby = () => {
    setBabyList(babyNames);
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
        <DisplayNames info={searchResult} />
      </section>
    </div>
  );
}
export default App;
