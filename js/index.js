require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import Card from './components/card';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Card />, document.getElementById('app'))
);
