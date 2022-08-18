import React from "react";
import Logo from './NoFace.png';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-*" style={{backgroundColor: 'rgb(0, 172, 120)'}}>
      <Link className="navbar-brand mb-0 h1" to="/#">
        <img style={{width: '45px', paddingRight:'15px'}} src={Logo} id='navbar-img'/>
        Christopher Ojo
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto nav-fill">
          <li className="nav-item px-2">
            <Link className="nav-link" to="/#about-me">
              About Me
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/#projects">
              Projects
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/#experience">
              Experience
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/#education">
              Education
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/#extracurriculars">
              Extracurriculars
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="#contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;