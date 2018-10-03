import React, { Component } from 'react';

export default class Services extends Component {
    render() {
        console.log(this.props);
        return (
            <h1 className="mt-5">Services ({this.props.match.params.article})</h1>
        )
    }
}