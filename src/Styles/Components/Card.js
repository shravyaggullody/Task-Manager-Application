import React, { useContext } from "react";
import "../Styles/Card.css";
import NotesContext from "../context/NotesContext";

const Card = (props) => {
  const context = useContext(NotesContext);
  const { deleteTask } = context;
  const { updateTask, task } = props;

  return (
    <>
      <div
        className={`m-3 outerborder ${props.isListView && "list"} ${
          props.isDarkMode ? "dark-mode" : "light-mode"
        }`}
        data-bs-theme={`${props.isDarkMode ? "dark" : "light"}`}
      >
        2w
      </div>
    </>
  );
};

export default Card;
