import React, { Component } from 'react';
import Featured from "../pages/Featured";

export default class About extends Component {
    render() {
        return (
            <div>
                <h1 className="mt-5">About</h1>
                <Featured /> 
            </div>
        )
    }
}