import "./App.css";
import { createContext, useState, useRef } from "react";
import DragNDrop from "./components/DragNDrop";
import AddItem from "./components/AddItem";
import PopUp from "./components/PopUp";
import EditTitle from "./components/EditTitle";
import { MdOutlineModeEdit } from "react-icons/md";
const data = [
  {
    title: "Backlog",
    items: [
      {
        "issue-task": "1",
        person: "Kyle",
        task: "Move the tasks around when read for the next section.",
      },
      {
        "issue-task": "2",
        person: "Kyle",
        task: "Rename the task vai the pen tool next to the untitled.",
      },
    ],
  },
  {
    title: "Ready",
    items: [
      {
        "issue-task": "3",
        person: "Kyle",
        task: "Remove a task by clicking the cross and add new items using the add items.",
      },
    ],
  },
  { title: "Work in progress", items: [] },
  { title: "Done", items: [] },
];

export const AppContext = createContext();

function App() {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const [addItem, setAddItem] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [title, setTitle] = useState("Untitled");
  const dragItem = useRef();
  const dragNode = useRef();

  const handleTitleSubmit = () => {
    setTitle(document.getElementById("newTitle").value);
    handlePopUpBackgroundTitle();
  };

  const handlePopUpBackgroundTitle = () => {
    setEditTitle(false);
  };
  const handleEditTitle = () => {
    setEditTitle(true);
  };

  const handleRemoveItem = (e, params) => {
    setList((list) => {
      let newList = JSON.parse(JSON.stringify(list));
      newList[params.groupI].items = list[params.groupI].items.filter(
        (item, index) => params.itemI !== index
      );

      return newList;
    });
  };
  const handleItemSubmit = () => {
    let issueNumber = document.getElementById("issue__number");

    list[0].items.push({
      "issue-task": document.getElementById("issue__number").value,
      person: document.getElementById("person").value,
      task: document.getElementById("task").value,
    });
    setList(list);
    setAddItem(false);
  };

  const handlePopUpBackground = () => {
    setAddItem(false);
  };
  const handlePopUp = () => {
    setAddItem(true);
  };

  const handleDragStart = (e, params) => {
    dragItem.current = params;
    dragNode.current = e.target;
    console.log(dragNode.current);
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnd = () => {
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setDragging(false);
    dragItem.current = null;
    dragNode.current = null;
  };

  const handleDragEnter = (e, params) => {
    if (dragNode.current === e.target) return;
    const currentItem = dragItem.current;
    setList((oldList) => {
      let newList = JSON.parse(JSON.stringify(oldList));
      newList[params.groupI].items.splice(
        params.itemI,
        0,
        newList[currentItem.groupI].items.splice(currentItem.itemI, 1)[0]
      );
      dragItem.current = params;
      return newList;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="title__container">
          <MdOutlineModeEdit className="pen__icon" onClick={handleEditTitle} />
          <h1>{title}</h1>
        </div>

        <AppContext.Provider
          value={{
            list,
            handleDragStart,
            dragging,
            dragItem,
            handleDragEnter,
            handlePopUp,
            handlePopUpBackground,
            dragNode,
            handleItemSubmit,
            handleRemoveItem,
            handlePopUpBackgroundTitle,
            handleTitleSubmit,
          }}
        >
          {editTitle && <EditTitle />}
          {addItem && <PopUp />}
          <AddItem />
          <DragNDrop />
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
