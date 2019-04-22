const obj = {
    name: "Marcus",
    getName(){
        return this.name
    }
}
console.log(obj.getName())

const getName = obj.getName.bind(obj)
console.log(getName())
console.log('App is running')

//This is a nested class - Its pulling the other components into the mix.
class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: ['this one', 'this two']
        }
    }
    handleDeleteOptions (){
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }
    handleAddOption(option){
        console.log(option)
    }
    render(){
        const title = 'Indecision App'
        const subTitle = 'Let this app decide what you should do'
        return(
            <div>
                <Header title = {title} subTitle = {subTitle}/>
                <Action 
                hasOptions = {this.state.options.length > 0}
                handlePick ={this.handlePick}
                />
                <Options 
                options = {this.state.options} 
                handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption
                handleAddOption = {this.handleAddOption}
                />
            
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
            <button onClick = {this.props.handlePick}
            disabled = {!this.props.hasOptions}
            >
            What Should I do?
            </button>
        </div>
        )
    }
}
//This Class renders Options Class
class Options extends React.Component{
    render(){
        return(
            <div>
            <button onClick ={this.props.handleDeleteOptions}>CLEAR MY OPTIONS</button>
               {
                   this.props.options.map((options) => <Option key={options}  optionsText={options}/>)
               }
               <Option />
            </div>
        )
    }
}
class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionsText}
            </div>
        )
    }
}


// This renders the form for submission
class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    onSubmit(e){
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
         
        if(option){
            this.props.handleAddOption(option)
        }
    }
    render(){
        return(
            <div> 
                <h3>Add Something Here!</h3>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="option"></input>
                    <button>This Needs To Be Added To My List</button>
                </form>
            </div>
        )
    }
}





//This grabs the element on the page. 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))