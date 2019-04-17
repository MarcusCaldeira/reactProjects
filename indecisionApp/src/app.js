console.log('App is running')

//This is a nested class - Its pulling the other components into the mix.
class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision App'
        const subTitle = 'Let this app decide what you should do'
        const options = ['thing one', 'thing two', 'thing three']
        return(
            <div>
                <Header title = {title} subTitle = {subTitle}/>
                <Action />
                <Options options = {options} />
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
    handlePick(){
        alert('HandlePick')

    }
    render(){
        return(
        <div>
            <button onClick = {this.handlePick}>What Should I do?</button>
        </div>
        )
    }
}
//This Class renders Options Class
class Options extends React.Component{
    handleRemoveAll(){
        alert('REmove')
    }
    render(){
        return(
            <div>
            <button onClick ={this.handleRemoveAll}>CLEAR MY OPTIONS</button>
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


//This renders the form for submission
class AddOption extends React.Component{
    onSubmit(e){
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        if(option){
            alert(option)
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