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
const onRemoveAll = (e) => {
    app.options = []
    render()
}
const onMakeDecision= (e) => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}
// In JSX you can have many JSX Expressions they just have to be wrapped in a single root element. 
const appRoot = document.getElementById('app')
const options= []
const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>    
                {app.subtitle && <p>{app.subtitle}</p>}
                <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
                <button onClick={onRemoveAll}>Remove All</button>
                <ol> 
                {
                    app.options.map((option) => <li key = {option}>Options: {option}</li>)
                }
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
