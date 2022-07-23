import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
const PopUp = () => {
  const { handlePopUpBackground, handleItemSubmit } = useContext(AppContext);

  return (
    <div className="pop_up_background" onClick={handlePopUpBackground}>
      <div className="add_task" onClick={(e) => e.stopPropagation()}>
        <h2>Add A Task</h2>
        <div className="top__form">
          <label>
            Issue Number: &nbsp;
            <input type="text" id="issue__number" />
          </label>
          <label>
            Person: &nbsp;
            <input type="text" id="person" />
          </label>
        </div>
        <div className="bottom__form">
          <label>Task:</label>
          <textarea name="" id="task" cols="30" rows="5"></textarea>
        </div>
        <button onClick={handleItemSubmit}>Add</button>
      </div>
    </div>
  );
};

export default PopUp;
