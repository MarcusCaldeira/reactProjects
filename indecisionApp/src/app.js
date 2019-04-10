// this is going to be where the JSX is going to be stored.


console.log('App.JS is running!')


//JSX - Javascript XML(its basically just a language extension)

const app = {
    title:'Indecision App',
    subtitle:'Put your hands in the life of a computer',
    options:[]
}
const onFormSubmit = (e) =>{
    //This will stop the browser window from reloading
    e.preventDefault();
    //Points to the element that the event started on. 
    const option = e.target.elements.option.value
    if (option){
        app.options.push(option)
        e.target.elements.option.value = ''
        render()   
    }

}
// In JSX you can have many JSX Expressions they just have to be wrapped in a single root element. 



const appRoot = document.getElementById('app')


const render = () =>{
    const template = (
        <div>
            <h1>Changed this a bit to early</h1>    
                <p>SO why do you need to be wrapped.</p>
                <p>{app.options.length}</p>
                <ol>
                    <li>IS this gonna work?</li>
                    <li>So that one worked? why did this one break?</li>
                </ol>
                <form onSubmit={onFormSubmit}>
                <input type ="text" name="option"></input>
                <button>Add Option</button>
                </form>
         </div>
         )
ReactDOM.render(template, appRoot)
}
render()
