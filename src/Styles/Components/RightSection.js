
import React, { useState } from "react";
import "../Styles/NewTaskModal.css";
import Progressbar from "../Components/Progressbar";

export default function RightSection() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`right-section ${isVisible ? "" : "hidden"}`}>
      {/* Right Section Content */}
      <header className="row">
        <h5 className="col-6 my-4">Hi, User!</h5>
        <img
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt=""
          className="rounded-circle h-25 w-25 col-30 my-3"
        />
      </header>
      <Progressbar />
      <p className='red'>switch modes</p>
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onClick={toggleDarkMode}
        />
        <div className="slider round"></div>
      </label>
      </div>
      
    </div>
  );
}
