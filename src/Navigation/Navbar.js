import React from "react";
import Logo from './NoFace.png'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-*" style={{backgroundColor: '#43e'}}>
      <a className="navbar-brand mb-0 h1" href="#">
        <img style={{width: '45px', paddingRight:'15px'}} src={Logo} id='navbar-img'/>
        Christopher Ojo
      </a>
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
          <li className="nav-item px-3">
            <a className="nav-link" href="#ref-about-me">
              About Me
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#ref-projects">
              Projects
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#ref-experience">
              Experience
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#ref-education">
              Education
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#ref-extracurriculars">
              Extracurriculars
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#ref-contact">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;