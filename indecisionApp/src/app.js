// this is going to be where the JSX is going to be stored.


console.log('App.JS is running!')


//JSX - Javascript XML(its basically just a language extension)

const app = {
    title:'Indecision App',
    subtitle:'Put your hands in the life of a computer',
    options:['one','two']
}
// In JSX you can have many JSX Expressions they just have to be wrapped in a single root element. 
const template = (
<div>
    <h1>Changed this a bit to early</h1>    
        <p>SO why do you need to be wrapped.</p>
        <ol>
            <li>IS this gonna work?</li>
            <li>So that one worked? why did this one break?</li>
        </ol>
        <form>
        <input type ="text" name="option"></input>
        </form>
 </div>
 )
const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
