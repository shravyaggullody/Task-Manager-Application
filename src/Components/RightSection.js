// RightSection.js

import React from "react";
import "../Styles/NewTaskModal.css";
import Progressbar from "../Components/Progressbar";

const RightSection = () => {
  return (
    <>
      {/* Right Section */}
      <div className="right-section" style={{ margin: "20px" }}>
        <Progressbar />
      </div>
    </>
  );
};

export default RightSection;
