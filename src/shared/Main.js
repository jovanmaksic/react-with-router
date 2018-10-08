import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Todos';
import Services from '../pages/Services';

export default class Main extends Component {
    render(){        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">                       
                            <Switch >                            
                            <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/services/:article" component={Services} />
                                <Route path="/contact" component={Contact} />
                            </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
