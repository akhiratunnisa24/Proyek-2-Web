import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbars = () => {
  return (
    <div className="main-header" data-background-color="purple">
        <div className="logo-header">     
        <NavLink to="/home" className="logo">
            <font size="5" style={{ color: "white" }} className="navbar-brand">SI-RAPOR</font>
        </NavLink>
        <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            <i className="fa fa-bars"></i>
            </span>
        </button>
        <button className="topbar-toggler more"><i className="fa fa-ellipsis-v"></i></button>
        <div className="navbar-minimize">
            <button className="btn btn-minimize btn-rounded">
            <i className="fa fa-bars"></i>
            </button>
        </div>
        </div>
        <nav className="navbar navbar-header navbar-expand-lg is-fixed-top">
        {/* You can add more navbar items here */}
        </nav>
    </div>
  )
}

export default Navbars