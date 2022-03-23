import React from "react";
import { NavLink } from "react-router-dom";
import "./css/navigation.css"

const Navigation = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <NavLink exact className="navbar-brand qb" to="/"><b>QuickTools</b></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/Quick-notes">Quick notes</NavLink>
              </li>

              <li className="nav-item">
                <NavLink exact className="nav-link" to="/weather">Weather</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/textutility">Textutility</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/clock">Clock</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/feedback">Feedback</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
