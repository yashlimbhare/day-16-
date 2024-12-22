import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
   
   <nav className={`navbar-expand-lg navbar navbar-${props.mode} bg-${props.mode} bg-`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        <li className="nav-item dropdown">
          {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> */}
          {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      

          {/* <div>
        <input type="radio" className="btn-check" name="options-base"  id="option5" autoComplete="off" />
        <label className="btn" htmlFor="option5">Red</label>
        <input type="radio" className="btn-check" name="options-base" id="option6" autoComplete="off" />
        <label className="btn" htmlFor="option6">Blue</label>
        <input type="radio" className="btn-check" name="options-base" id="option7" autoComplete="off"  />
        <label className="btn" htmlFor="option7">Green</label>
        <input type="radio" className="btn-check" name="options-base" id="option8" autoComplete="off" />
        <label className="btn" htmlFor="option8">Yellow</label>
      </div> */}


        <div className={`form-check form-switch text-${props.mode === 'light' ?'dark':'light'} mx-3`}>
          <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable  Dark Mode</label>
        </div>


    </div>
  </div>
</nav>


  </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
};

Navbar.defaultProps ={
  title: "hi",
  about: "abouttextere"
};