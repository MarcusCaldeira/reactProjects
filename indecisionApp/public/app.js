'use strict';

console.log('Visible App is running');

var appRoot = document.getElementById('app');
var visible = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'THIS IS GONNA HIDE'
    ),
    React.createElement(
        'button',
        null,
        'HIDE THINGS'
    )
);

ReactDOM.render(visible, appRoot);
