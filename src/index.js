import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<h1> project templates, test </h1>, document.getElementById('root'));

render(
    <Provider store={store}>
        <h1>Inicjalizacja projektu</h1>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
