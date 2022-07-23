import { useContext } from "react";
import React from "react";
import { AppContext } from "../App";

const AddItem = () => {
  const { handlePopUp } = useContext(AppContext);
  return (
    <button className="add__item__button" onClick={handlePopUp}>
      Add Item
    </button>
  );
};

export default AddItem;
