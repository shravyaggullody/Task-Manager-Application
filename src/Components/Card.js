import React, { useContext } from "react";
import "../Styles/Card.css";
import NotesContext from "../Context/NotesContext";

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
        <div className="card rounded-5 border-2">
          <div className="card-body">

            <h5 className="card-title mb-2">{props.title}</h5>
            <hr className="w-100" style={{ borderTop: '1px solid grey' }} />

            <time className="mt-3 mb-3 flex w-full ">
              {props.date}
            </time>
            <h6 className="card-subtitle mb-4 text-body-secondary">
              {props.description}
            </h6>
            <hr className="w-100" style={{ borderTop: '1px solid grey' }} />

            <div className="d-flex justify-content-between align-items-center my-2">
  <i
    className={`fa star ${props.important ? "fa-star" : "fa-star-o"} fs-4`}
    onClick={() => {
      props.toggleFav(props.index);
    }}
    id={`${props.id}`}
  ></i>
  <i
    className={`fa fa-trash fs-4`}
    aria-hidden="true"
    onClick={() => {
      deleteTask(props.id);
    }}
  ></i>
  <i
    className="bi bi-pen-fill fs-4"
    aria-hidden="true"
    onClick={() => updateTask(task)}
  ></i>
</div>

            <div className="row d-flex my-4">
              <button
                type="button"
                className="btn btn-primary "
                id="completed"
                onClick={() => {
                  props.toggleStatus(props.index);
                }}
              >
                {props.completed ? "Completed" : "Incomplete"}
              </button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
