import React from "react";

const Search = (props) => {
  const handleChangeValue = (event) => {
    props.handleChangeInput(event.target.value);
  };
  return (
    <div className="p-5">
      <input type="text" onChange={handleChangeValue}></input>
      <button className="btn btn-primary m-2" onClick={props.resetAllBaby}>
        All
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={function handleClick() {
          props.filterBabyGender("f");
        }}
      >
        Girls{" "}
      </button>
      <button
        className="btn btn-primary m-2"
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
