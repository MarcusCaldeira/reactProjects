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

var appRoot = document.getElementById('app');

var user = {
    Name: 'Matcus',
    Age: 27
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
        user.Name + '!'
    ),
    React.createElement(
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
