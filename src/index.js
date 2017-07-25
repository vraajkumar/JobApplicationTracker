import React from 'react';
import { render }  from 'react-dom';
import './styles/index.css';
import App from './components/App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {loadJobNotes} from './actions/JBEntryAction';
//import { Router } from 'react-router';
import JobForm from './components/jobs/jobForm';
//import routes from './routes';


const store = configureStore();
store.dispatch(loadJobNotes());

//console.log(`recuriterNotes ${store.getState()}`)

render(
  <Provider store={store}>
     <JobForm />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
