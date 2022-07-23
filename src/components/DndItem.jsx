import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import "../App.css";
import { GrClose } from "react-icons/gr";
const DndItem = ({ item, groupI, itemI }) => {
  const {
    handleRemoveItem,
    handleDragStart,
    dragging,
    dragItem,
    handleDragEnter,
  } = useContext(AppContext);

  const getStyle = (currObj) => {
    const currentItem = dragItem.current;
    if (
      currentItem.groupI === currObj.groupI &&
      currentItem.itemI === currObj.itemI
    ) {
      return "current dnd-item";
    } else {
      return "dnd-item";
    }
  };

  return (
    <div
      onDragStart={(e) => {
        handleDragStart(e, { groupI, itemI });
      }}
      onDragEnter={
        dragging ? (e) => handleDragEnter(e, { groupI, itemI }) : null
      }
      draggable
      key={item["issue-task"]}
      className={dragging ? getStyle({ groupI, itemI }) : "dnd-item"}
    >
      <div className="container">
        <div className="top__item">
          <div className="issue__number">#{item["issue-task"]}</div>
          {!dragging && (
            <GrClose
              className="close"
              onClick={(e) => {
                handleRemoveItem(e, { groupI, itemI });
              }}
            />
          )}
        </div>
        <h1>Task:</h1>
        <div className="task">{item.task}</div>
        <div className="bottom__item">
          <div className="persons__task">{item.person[0].toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
};

export default DndItem;
