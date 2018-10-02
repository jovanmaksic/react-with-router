import React from 'react';
import ReactDOM from 'react-dom';

import './bootstrap.min.css';
import './index.css';
import Layout from './Layout';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(<Layout />, document.getElementById('app')
);

module.hot.accept();