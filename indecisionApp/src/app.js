console.log('App is running')


//This is the header to display upper part of app
class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>Indecision App</h1>
                <h2>Let this app decide what you should do?</h2>
            </div>
        )
    }

}
//This class extends the button on the html page. 
class Action extends React.Component{
    render(){
        return(
        <div>
            <button>What Should I do?</button>
        </div>
        )
    }
}
//This Class renders Options Class
class Option extends React.Component{
    render(){
        return(
            <div>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
        )
    }
}
//This renders the form for submission
class AddOption extends React.Component{
    render(){
        return(
            <div>
                <h3>Add Something Here!</h3>
                <form>
                    <input type="text">
                    
                    </input>
                </form>
            </div>
        )
    }
}




//This is displaying the react element.
const jsx = (
    <div>
        <Header />
        <Action />
        <Option />
        <AddOption />
    </div>
)
//This grabs the element on the page. 
ReactDOM.render(jsx, document.getElementById('app'))