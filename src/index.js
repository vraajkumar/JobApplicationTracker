import React from 'react';
import { render }  from 'react-dom';
import './styles/index.css';
import App from './components/App';
import configureStore from './store/configureStore';
import {Provider, connect} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router';
import JobList from './components/jobs/jobList';
import routes from './routes';


const store = configureStore();

render(
  <Provider store={store}>
     <JobList />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
