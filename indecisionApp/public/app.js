console.log('App.JS is running!')


//JSX - Javascript XML(its basically just a language extension)

// const template = <p>A REACT THING</p>
var template = React.createElement("p", null, "A REACT THING");
const appRoot = document.getElementById('app');


//This says we wanna render that template in that element. 
ReactDOM.render(template, appRoot);

