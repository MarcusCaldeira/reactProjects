// this is going to be where the JSX is going to be stored.


console.log('App.JS is running!')


//JSX - Javascript XML(its basically just a language extension)

// In JSX you can have many JSX Expressions they just have to be wrapped in a single root element. 
const templateOne = (
<div>
    <h1>Changed this a bit to early</h1>    
        <p>SO why do you need to be wrapped.</p>
        <ol>
            <li>IS this gonna work?</li>
            <li>So that one worked? why did this one break?</li>
        </ol>
 </div>
 )
 let count = 0 
 const addOne = () =>{
     console.log('Add One')
 }
 const minusOne = () => {
     console.log('Minus One')
 }
 const reset = () => {
     console.log('Reset')
 }
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick = {addOne}>+1</button> 
        <button onClick = {minusOne}>-1</button> 
        <button onClick = {reset}>Reset</button> 
    </div>
)
console.log(templateTwo)
const appRoot = document.getElementById('app')






//This says we wanna render that template in that element. 
ReactDOM.render(templateTwo, appRoot)

