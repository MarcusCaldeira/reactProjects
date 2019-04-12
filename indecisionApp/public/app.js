'use strict';

console.log('Visible App is running');

var visibilty = false;
var toggleVisibilty = function toggleVisibilty() {
    visibilty = !visibilty;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibilty },
            visibilty ? 'Hide Details' : 'Show Details'
        ),
        visibilty && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'GO ON HIDE ME'
            )
        )
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
