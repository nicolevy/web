import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import App from './Components/App/App';
import Stopwatch from './Components/Stopwatch/Stopwatch';

const router = (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/stopwatch' component={Stopwatch} />
        </div>
    </BrowserRouter>
);


render(router, document.getElementById('root'));
registerServiceWorker();
