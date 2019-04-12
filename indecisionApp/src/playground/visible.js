console.log('Visible App is running')

let visibilty = false
const toggleVisibilty = () => {
    visibilty = !visibilty
    render()
}

const render = () => {
    const jsx = (
        <div>
            <p>Toggle</p>
            <button onClick={toggleVisibilty}> 
            {visibilty ? 'Hide Details': 'Show Details'}
            </button>
            {visibilty && (
                <div>
                <p>GO ON HIDE ME</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'))
}


render()
