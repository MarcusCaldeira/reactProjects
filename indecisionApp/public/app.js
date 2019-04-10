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
var addOne = function addOne() {
    count++;
    console.log('Add One', count);
};
var minusOne = function minusOne() {
    console.log('Minus One');
};
var reset = function reset() {
    console.log('Reset');
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
    //This says we wanna render that template in that element. 
    // ReactDOM.render(templateTwo, appRoot)
};
renderCounterApp();
