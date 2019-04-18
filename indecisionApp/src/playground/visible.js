console.log('Visible App is running')


class visibilty extends React.Component{
    constructor(props){
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            show: false
        }
    }
}


// let visbilty = false
// const toggleVisibilty = () => {
//     //Takes the current visibilty value and flip it from true to false(When clicked)
//     visbilty = !visbilty
//     render()
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>visbilty toggle</h1>
//             <button onClick = {toggleVisibilty}>
//             {visbilty ? 'HIDE ME': 'SHOW ME'}
//             </button>
//             {visbilty && (
//                 <div>
//                     <p>
//                     these are some detailsç
//                     </p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(jsx, document.getElementById('app'))
// }


// render()






