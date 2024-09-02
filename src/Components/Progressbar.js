import React from "react";
import { useContext } from "react";
import NotesContext from "../Context/NotesContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Progressbar() {
  const { tasks } = useContext(NotesContext);
  var completed = 0;
  const array1 = [];

  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
      completed++;
    } else {
      var date = tasks[i].date;
      var date1 = new Date().toISOString().split("T");
      var compValue = date.localeCompare(date1[0].toString());
      if (compValue <= 0) {
        array1.push(tasks[i]);
      }
    }
  }

  const handleClick = () => {
    console.log(array1);
  };
  var total = tasks.length;

  const percentage = total === 0 ? 0 : (completed / total) * 100;

  return (
    <>
            <span className="my-2 py-4 d-flex justify-content-between ">
        <span onClick={handleClick}>Tasks</span>
      </span>

      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={percentage}
          text={`${Math.round(percentage)}%`}
          styles={buildStyles({
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: '#000',
          })}
        />
      </div>
    </>
  );
}
