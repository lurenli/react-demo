// (() => {
//     document.getElementById("app").innerHTML = "hello react!"
// })()

// var func = str => {
//     document.getElementById('app').innerHTML = str;
// };
// func('我现在在使用Babel!');

import React from 'react';
import ReactDom from 'react-dom';
import getRouter from 'Router/router';
import { AppContainer } from 'react-hot-loader';
import Hello from 'Component/Hello/Helo';
import { Provider } from 'react-redux';
import store from './src/redux/store';


/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./src/router/router', () => {
        const getRouter = require('./src/router/router').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>, document.getElementById('app'));
}

