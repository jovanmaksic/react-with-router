import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Todos from '../pages/Todos';

export default class Main extends Component {
    render(){        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">                       
                            <Switch >                            
                                <Route exact path="/" component={Todos} />
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
