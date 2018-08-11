import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './views';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, fas)

ReactDOM.render( <Home />, document.getElementById('root'));
registerServiceWorker();
