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
//This is displaying the react element.
const jsx = (
    <div>
        <Header />
        <Action />
    </div>
)
//This grabs the element on the page. 
ReactDOM.render(jsx, document.getElementById('app'))