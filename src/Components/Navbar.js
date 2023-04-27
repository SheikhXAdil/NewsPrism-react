import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {


  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">NewsPrism</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className="nav-link" id='home' to="/">Home</NavLink>
              </li>
              <li className="nav-item"><NavLink className="nav-link" to="/business"  activeclassname="active">Business</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/entertainment"  activeclassname="active">Entertainment</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/health"  activeclassname="active">Health</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/science"  activeclassname="active">Science</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/sports"  activeclassname="active">Sports</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/technology"  activeclassname="active">Technology</NavLink></li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'Dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toogleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
