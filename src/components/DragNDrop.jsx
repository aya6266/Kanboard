import React, { useContext } from "react";
import { AppContext } from "../App";
import DndGroup from "./DndGroup";
const DragNDrop = () => {
  const { list } = useContext(AppContext);
  return (
    <div className="drag-n-drop">
      {list.map((obj, objI) => {
        return <DndGroup groupObj={obj} groupI={objI} />;
      })}
    </div>
  );
};

export default DragNDrop;
