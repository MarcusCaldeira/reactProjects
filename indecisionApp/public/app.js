'use strict';

console.log('Visible App is running');

var visbilty = false;
var toggleVisibilty = function toggleVisibilty() {
    //Takes the current visibilty value and flip it from true to false(When clicked)
    visbilty = !visbilty;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'visbilty toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibilty },
            visbilty ? 'HIDE ME' : 'SHOW ME'
        ),
        visbilty && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'these are some details'
            )
        )
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
