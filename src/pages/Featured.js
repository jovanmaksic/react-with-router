import React, { Component } from 'react';
import Article from '../shared/Article';


export default class Featured extends Component {
    render() {
        
        const Articles = [
            "Some Article",
            "Some oter Article",
            "Yet Another Article",
            "Still More Article"
        ].map((title, i) => <Article key={i} title={title} />);
        
         
        return (
               <div>{Articles}</div>
        )
    }
}

