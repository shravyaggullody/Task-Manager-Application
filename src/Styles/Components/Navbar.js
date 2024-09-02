import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

export default function Navbar(props) {
  return (
    <nav className='nav'>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/today">Today's Tasks</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/all">All Tasks</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/important">Important Tasks</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/completed">Completed Tasks</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/incomplete">Incomplete Tasks</Link>
        </li>
      </ul>
    </nav>
  )
}
