// (() => {
//     document.getElementById("app").innerHTML = "hello react!"
// })()

// var func = str => {
//     document.getElementById('app').innerHTML = str;
// };
// func('我现在在使用Babel!');

import React from 'react';
import ReactDom from 'react-dom';
import getRouter from './src/router/router';
import Hello from './src/components/Hello/Helo';

ReactDom.render(
    getRouter(), document.getElementById('app'));

