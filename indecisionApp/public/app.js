'use strict';

// this is going to be where the JSX is going to be stored.


console.log('App.JS is running!');

//JSX - Javascript XML(its basically just a language extension)

// In JSX you can have many JSX Expressions they just have to be wrapped in a single root element. 
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'IDk Where one of those elements is coming from?'
    ),
    React.createElement(
        'p',
        null,
        'SO why do you need to be wrapped.'
    )
);

var appRoot = document.getElementById('app');

//This says we wanna render that template in that element. 
ReactDOM.render(template, appRoot);
