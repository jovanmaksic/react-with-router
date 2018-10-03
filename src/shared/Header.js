import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

export default class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                Start Bootstrap
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home
                        <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" activeClassName="test" >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services" >Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}