import React from 'react'
import "../Styles/NewTaskModal.css"
import Navbar from './Navbar'
// import AddNewTaskModal from './AddNewTaskModal'

export default function Leftsection(props) {
  return (
    <>
    <h4 className='text-center my-3 text-lg' style={{paddingBottom:"6rem",paddingTop:"2rem"}}>TO-DO LIST 12</h4>


<Navbar isDarkMode={props.isDarkMode}/>

    </>
  )
}
