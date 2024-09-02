import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

export default function Navbar(props) {
  return (
    <nav className='nav'>
      <ul className="nav flex-column p-0 m-0">
        <hr className="w-100 m-1" style={{ borderTop: '1px solid grey' }} />
        <li className="nav-item p-0 m-0">
          <Link className="nav-link p-2 m-0" to="/">Home</Link>
        </li>
        <hr className="w-100 m-1" style={{ borderTop: '1px solid grey' }} />
        <li className="nav-item p-0 m-0">
          <Link className="nav-link p-2 m-0" to="/today">Today's Tasks</Link>
        </li>
        <hr className="w-100 m-1" style={{ borderTop: '1px solid grey' }} />
        <li className="nav-item p-0 m-0">
          <Link className="nav-link p-2 m-0" to="/all">All Tasks</Link>
        </li>
        <hr className="w-100 m-1" style={{ borderTop: '1px solid grey' }} />
        <li className="nav-item p-0 m-0">
          <Link className="nav-link p-2 m-0" to="/important">Important Tasks</Link>
        </li>
        <hr className="w-100 m-1" style={{ borderTop: '1px solid grey' }} />
        <li className="nav-item p-0 m-0">
          <Link className="nav-link p-2 m-0" to="/completed">Completed Tasks</Link>
        </li>
        <hr className="w-100 m-1" style={{ borderTop: '1px solid grey' }} />
        <li className="nav-item p-0 m-0">
          <Link className="nav-link p-2 m-0" to="/incomplete">Incomplete Tasks</Link>
        </li>
        <hr className="w-100 m-1" style={{ borderTop: '1px solid grey' }} />
      </ul>
    </nav>
  );
}
