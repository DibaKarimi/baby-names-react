import React from "react";

const Search = (props) => {
  const handleChangeValue = (event) => {
    props.handleChangeInput(event.target.value);
  };
  return (
    <div className="p-5">
      <input
        type="text"
        className="p-2"
        onChange={handleChangeValue}
        placeholder="Search for a name..."
      ></input>
      <button className="btn btn-warning m-2" onClick={props.resetAllBaby}>
        All
      </button>
      <button
        className="btn btn-warning m-2"
        onClick={function handleClick() {
          props.filterBabyGender("f");
        }}
      >
        Girls
      </button>
      <button
        className="btn btn-warning m-2"
        onClick={function handleClick() {
          props.filterBabyGender("m");
        }}
      >
        boys
      </button>
    </div>
  );
};
export default Search;
