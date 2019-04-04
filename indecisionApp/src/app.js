// this is going to be where the JSX is going to be stored.


console.log('App.JS is running!')


//JSX - Javascript XML(its basically just a language extension)

// In JSX you can have many JSX Expressions they just have to be wrapped in a single root element. 
const template = (
<div>
    <h1>Changed this a bit to early</h1>    
        <p>SO why do you need to be wrapped.</p>
        <ol>
            <li>IS this gonna work?</li>
            <li>So that one worked? why did this one break?</li>
        </ol>
 </div>
 )

const appRoot = document.getElementById('app')



var userName = 'Marcus'
const template2 = (
    <div>
        <h1>{userName}</h1>
        <p>Age: 27</p>
        <p>Location: Saint Paul</p>
    </div>
)

const approot2 = document.getElementById('appTwo')


//This says we wanna render that template in that element. 
ReactDOM.render(template, appRoot)
ReactDOM.render(template2, approot2)
