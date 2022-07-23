import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
const PopUp = () => {
  const { handlePopUpBackgroundTitle, handleTitleSubmit } =
    useContext(AppContext);

  return (
    <div className="pop_up_background" onClick={handlePopUpBackgroundTitle}>
      <div className="add_task" onClick={(e) => e.stopPropagation()}>
        <h2 className="title__edit">Edit Title</h2>
        <label htmlFor="">
          Change Title
          <br />
          <input type="text" id="newTitle" />
        </label>
        <button onClick={handleTitleSubmit}>New Title</button>
      </div>
    </div>
  );
};

export default PopUp;
