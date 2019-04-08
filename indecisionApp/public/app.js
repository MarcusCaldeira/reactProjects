'use strict';

// this is going to be where the JSX is going to be stored.


console.log('App.JS is running!');

//JSX - Javascript XML(its basically just a language extension)

// In JSX you can have many JSX Expressions they just have to be wrapped in a single root element. 
var app = {
    title: 'Indecision App',
    subtitle: 'Put the hands in the life on a computer.',
    option: ['one', 'two']
};

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
        app.option.length > 0 ? 'Here are your options' : 'no options'
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

var appRoot = document.getElementById('app');

var user = {
    Name: 'Marcus',
    Age: 27,
    location: 'Saint Pul'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.Name ? user.Name : 'Anon'
    ),
    user.Age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.Age
    ),
    getLocation(user.location)
);
var approot2 = document.getElementById('appTwo');

// var app = {
//     title: 'WHAT A TITLE',
//     subtitle: 'WHAT is a subtitle anyway?'
// }

// const template3 = (
//     <div>
//         <h1>{app.title}</h1>
//         <h1>{app.subtitle}</h1>
//     </div>
// )

// const approot3 = document.getElementById('appThree')


//This says we wanna render that template in that element. 
ReactDOM.render(template, appRoot);
ReactDOM.render(template2, approot2);
ReactDOM.render(template3, approot3);
