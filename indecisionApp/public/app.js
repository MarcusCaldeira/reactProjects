'use strict';

// this is going to be where the JSX is going to be stored.


console.log('App.JS is running!');

//JSX - Javascript XML(its basically just a language extension)

// In JSX you can have many JSX Expressions they just have to be wrapped in a single root element. 
var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Changed this a bit to early'
    ),
    React.createElement(
        'p',
        null,
        'SO why do you need to be wrapped.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'IS this gonna work?'
        ),
        React.createElement(
            'li',
            null,
            'So that one worked? why did this one break?'
        )
    )
);
var count = 0;
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { id: 'myID', className: 'Button' },
        '+1'
    )
);

var appRoot = document.getElementById('app');

//This says we wanna render that template in that element. 
ReactDOM.render(templateTwo, appRoot);
