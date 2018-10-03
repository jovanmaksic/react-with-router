import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {

    navigate(){
        console.log(this.props);
    }

    render(){
        return(            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                {this.props.children}
                <div className="container">
                Start Bootstrap
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home
                        <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services" >Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" >Contact</Link>
                    </li>
                    <li className="nav-item">
                       <button className="btn btn-danger" onClick={this.navigate.bind(this)}>console log</button>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}