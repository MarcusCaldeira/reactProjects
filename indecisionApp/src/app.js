// this is going to be where the JSX is going to be stored.


console.log('App.JS is running!')


//JSX - Javascript XML(its basically just a language extension)

// In JSX you can have many JSX Expressions they just have to be wrapped in a single root element. 
var app = {
    title:'Indecision App', 
    subtitle: 'Put the hands in the life on a computer.', 
    option:['one', 'two']
}


const template = (
<div>
    <h1>{app.title}</h1>    
    {/*Only render the subtitle (and p tag) if the subtitle exists.*/}
       {app.subtitle && <p>{app.subtitle}</p>}
       {/*If app.options.length is greater than zero use one message if its not, use the other. */}
       <p>{app.option.length >0 ? 'Here are your options' : 'no options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
 </div>
 )

const appRoot = document.getElementById('app')











var user = {
    Name: 'Marcus',
    Age: 27,
    location: 'Saint Pul'
}

function getLocation(location){
    if (location){
        return <p>Location: {location}</p>
    }
}

const template2 = (
    <div>
        <h1>{user.Name ? user.Name : 'Anon'}</h1>
        {(user.Age >= 18) && <p>Age: {user.Age}</p>}
        {getLocation(user.location)}
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

