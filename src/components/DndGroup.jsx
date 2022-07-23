import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import DndItem from "./DndItem";
const DndGroup = ({ groupObj, groupI }) => {
  const { dragging, handleDragEnter } = useContext(AppContext);

  return (
    <div
      key={groupObj.title}
      className="dnd-group"
      onDragEnter={
        dragging && !groupObj.items.length
          ? (e) => {
              e.preventDefault();
              handleDragEnter(e, { groupI, itemI: 0 });
            }
          : null
      }
    >
      <div className="group-title"> {groupObj.title} </div>
      {groupObj.items.map((item, itemI) => {
        return <DndItem item={item} groupI={groupI} itemI={itemI} />;
      })}
    </div>
  );
};

export default DndGroup;
