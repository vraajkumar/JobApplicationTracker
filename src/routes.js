import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/home/HomePage';



export default (
  <BrowserRouter>
    <div>
      <Route path='/' component={HomePage} />
    </div>
  </BrowserRouter>
);
