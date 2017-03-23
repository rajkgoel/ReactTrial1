import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as App from './components/App';
import * as HomePage from './components/home/HomePage';
import * as AboutPage from './components/about/AboutPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);