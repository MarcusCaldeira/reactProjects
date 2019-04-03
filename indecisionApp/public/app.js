'use strict';

// this is going to be where the JSX is going to be stored.


console.log('App.JS is running!');

//JSX - Javascript XML(its basically just a language extension)

var template = React.createElement(
  'p',
  null,
  'A REACT THING'
);
var appRoot = document.getElementById('app');

//This says we wanna render that template in that element. 
ReactDOM.render(template, appRoot);
