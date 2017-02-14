import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'

var style = require('./styles/app.styl');

ReactDOM.render(
    routes, document.getElementById('container'));
