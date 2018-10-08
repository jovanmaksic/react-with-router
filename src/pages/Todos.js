import React, { Component } from 'react';
import Featured from "./Featured";

export default class Home extends Component {
    render() {
        return (
            <div>                
                <h1 className="mt-5">Home</h1>
                <Featured /> 
            </div>
        )
    }
}