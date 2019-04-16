console.log('App is running')

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
class Action extends React.Component{
    render(){
        return(
        <div>
            <button>What Should I do?</button>
        </div>
        )
    }
}
const jsx = (
    <div>
        <Header />
        <Action />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))