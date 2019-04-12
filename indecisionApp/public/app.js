'use strict';

// this is going to be where the JSX is going to be stored.


console.log('App.JS is running!');

//JSX - Javascript XML(its basically just a language extension)

var app = {
    title: 'Indecision App',
    subtitle: 'Put your hands in the life of a computer',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    //This will stop the browser window from reloading
    e.preventDefault();
    //Points to the element that the event started on. 
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
var onRemoveAll = function onRemoveAll(e) {
    app.options = [];
    render();
};
var onMakeDecision = function onMakeDecision(e) {
    var randomNum = Math.random();
    console.log(randomNum);
};
// In JSX you can have many JSX Expressions they just have to be wrapped in a single root element. 
var appRoot = document.getElementById('app');
var options = [];
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No Options'
        ),
        React.createElement(
            'button',
            { onClick: onMakeDecision },
            'What Should I Do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    'Options: ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
