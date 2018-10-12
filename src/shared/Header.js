import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    constructor(){
        super()
        this.state = {
            collapsed: true
        }
    }

    togleCollapse = ()=>{
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render(){

        const collapsed = this.state;        
        const navClass = collapsed.collapsed ? "collapse" : "";
        const toggleClass = `navbar-collapse ${ navClass }`;
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                Start Bootstrap
                <button onClick={this.togleCollapse} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className={toggleClass} id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/" activeClassName="active">Tods</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" activeClassName="active" >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services" activeClassName="active" >Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" activeClassName="active" >Contact</NavLink>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}