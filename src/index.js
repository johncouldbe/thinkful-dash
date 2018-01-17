import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

import * as firebase from 'firebase';
import mixpanel from 'mixpanel-browser';
import MixpanelProvider from 'react-mixpanel';
//Facebook Pixels
import ReactPixel from 'react-facebook-pixel';

const config = {
  databaseURL: "https://thinkful-student-dash.firebaseio.com/"
}

mixpanel.init("7ba73faa4e32449da63093be1f2b4c51");
firebase.initializeApp(config)
ReactPixel.init('412969795514711');

ReactDOM.render(
  <Provider store={store}>
    <MixpanelProvider mixpanel={mixpanel}>
      <App />
    </MixpanelProvider>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
