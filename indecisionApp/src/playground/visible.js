console.log('Visible App is running')

const appRoot = document.getElementById('app')
const visible = (
    <div>
        <p>THIS IS GONNA HIDE</p>
        <button>HIDE THINGS</button>
    </div>
)

ReactDOM.render(visible,appRoot)
