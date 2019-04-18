class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            visbilty : false
        }
    }
    handleToggle (){
        this.setState((oldState) => {
            return{
                //Grab the old state by accessing oldState.visibilty and flip is by using the logical not operator in front
                visbilty : !oldState.visbilty 
            }
        })
    }
    render(){
        return (
            <div>
                <h1>visbilty toggle</h1>
                <button onClick = {this.handleToggle }>
                {this.state.visbilty ? 'HIDE ME': 'SHOW ME'}
                </button>
                {this.state.visbilty && (
                    <div>
                        <p>
                        these are some details
                        </p>
                    </div>
                )}
            </div>
        )
        
    }
}
ReactDOM.render(<Toggle />, document.getElementById('app'))






