import Leftsection from './Components/Leftsection';
import CenterSection from './Components/CenterSection';
import RightSection from './Components/RightSection';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import './Darkmode.css';
import './App.css';
import NotesState from './Context/NotesState';

function App() {
    // Use state to track the current mode (light or dark)
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    // Function to toggle between light and dark modes
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Use state to control the visibility of the left section
    const [isLeftSectionVisible, setIsLeftSectionVisible] = useState(true);

    // Function to toggle the left section visibility
    const toggleLeftSection = () => {
        setIsLeftSectionVisible(!isLeftSectionVisible);
    };

    return (
        <NotesState>
            <div className={`row app ${isDarkMode ? 'dark-mode' : 'light-mode'} min-vh-100`}>
                <Router>
                    
                    <div className={`col left ${isDarkMode ? 'dark-mode' : 'light-mode'} ${isLeftSectionVisible ? '' : 'd-none'}`} id="filters">
                        <Leftsection isDarkMode={isDarkMode} openMenuHeaderHandler={toggleLeftSection} />
                    </div>
                    <Routes>
                        <Route path="/today" element={
                            <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                                <CenterSection navlink="today" isDarkMode={isDarkMode}   openMenuHeaderHandler={toggleLeftSection} // Pass the toggleLeftSection function as a prop
/>
                            </div>
                        }/>
                        <Route path="/all" element={
                            <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                                <CenterSection navlink="all" isDarkMode={isDarkMode}   openMenuHeaderHandler={toggleLeftSection} // Pass the toggleLeftSection function as a prop
 />
                            </div>
                        }/>
                        <Route path="/" element={
                            <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                                <CenterSection navlink="" isDarkMode={isDarkMode}   openMenuHeaderHandler={toggleLeftSection} // Pass the toggleLeftSection function as a prop
 />
                            </div>
                        }/>
                        <Route path="/important" element={
                            <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                                <CenterSection navlink="important" isDarkMode={isDarkMode}   openMenuHeaderHandler={toggleLeftSection} // Pass the toggleLeftSection function as a prop
/>
                            </div>
                        }/>
                        <Route path="/completed" element={
                            <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                                <CenterSection navlink="completed" isDarkMode={isDarkMode}   openMenuHeaderHandler={toggleLeftSection} // Pass the toggleLeftSection function as a prop
/>
                            </div>
                        }/>
                        <Route path="/incomplete" element={
                            <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                                <CenterSection navlink="incomplete" isDarkMode={isDarkMode}   openMenuHeaderHandler={toggleLeftSection} // Pass the toggleLeftSection function as a prop
 />
                            </div>
                        }/>
                    </Routes>
                </Router>
                <div className={`col align-items-end right ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                    <RightSection />
                    <hr className="w-100" style={{ borderTop: '1px solid grey' }} />

                    <div style={{ margin: "20px" }}>
                        <p>Switch Modes</p>
                        <div className="toggle-theme-wrapper">
                            <label className="toggle-theme" htmlFor="checkbox">
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    onClick={toggleDarkMode}
                                />
                                <div className="slider"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </NotesState>
    );
}

export default App;
