import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import About from '../pages/About';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Services from '../pages/Services';

export default class Header extends Component {
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
                            <Route component={Error} />
                        </Switch>
                        <h1 className="mt-5">A Bootstrap 4 Starter Template</h1>
                        <p className="lead">Complete with pre-defined file paths and responsive navigation!</p>
                        <ul className="list-unstyled">
                        <li>Bootstrap 4.1.3</li>
                        <li>jQuery 3.3.1</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
