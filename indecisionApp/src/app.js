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


var user = {
    Name: 'Matcus',
    Age: 27
}

function getLocation(location){
    if (location){
        return <p>Location: {location}</p>
    }
}

const template2 = (
    <div>
        <h1>{user.Name + '!'}</h1>
        <p>Age: {user.Age}</p>
        {getLocation(location)}
    </div>
)
const approot2 = document.getElementById('appTwo')

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
ReactDOM.render(template, appRoot)
ReactDOM.render(template2, approot2)
ReactDOM.render(template3, approot3)

