import React from 'react';
import "../Styles/NewTaskModal.css";
import Navbar from './Navbar';

export default function Leftsection(props) {
  return (
    <div className="left-section">

      <h4 className='text-center my-3 text-lg' style={{ paddingBottom: "2rem", paddingTop: "2rem", fontWeight: "bold", color: "rgb(1, 123, 127)" }}>TO-DO LIST </h4>
      <Navbar isDarkMode={props.isDarkMode} />
    </div>
  );
}
