console.log('App is running')

//This is a nested class - Its pulling the other components into the mix.
class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision App'
        const subTitle = 'Let this app decide what you should do'
        return(
            <div>
                <Header title = {title} subTitle = {subTitle}/>
                <Action />
                <Options />
                <AddOption />
            
            </div>
        )
    }
}


//This is the header to display upper part of app
class Header extends React.Component {
    render(){
        return( 
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
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
class Options extends React.Component{
    render(){
        return(
            <div>
               <p>Options Component Here</p>
               <Option />
            </div>
        )
    }
}
class Option extends React.Component{
    render(){
        return(
            <div>
                <p>This is an option</p>
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





//This grabs the element on the page. 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))