import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';
import 'flag-icon-css/css/flag-icon.min.css'
ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </HashRouter>
),document.getElementById('root'));
