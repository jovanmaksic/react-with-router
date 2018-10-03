import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './bootstrap.min.css';
import './index.css';
import Layout from './Layout';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render((
    <BrowserRouter>
        <Layout />
    </BrowserRouter>),
    document.getElementById('app')
    );
    
module.hot.accept();