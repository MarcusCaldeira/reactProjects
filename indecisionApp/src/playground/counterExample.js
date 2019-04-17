
//  let count = 0 
//  const addOne = () =>{
//      count++
//      renderCounterApp()
//  }
//  const minusOne = () => {
//      count--
//      renderCounterApp()
//  }
//  const reset = () => {
//      count = 0
//      renderCounterApp()
//  }

// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick = {addOne}>+1</button> 
//             <button onClick = {minusOne}>-1</button> 
//             <button onClick = {reset}>Reset</button> 
//         </div>
//     )
//     ReactDOM.render(templateTwo, appRoot)
//     //This says we wanna render that template in that element. 
//     // ReactDOM.render(templateTwo, appRoot)
// }
// renderCounterApp()


console.log('Counter Example Template')


class Counter extends React.Component{
    handleAddOne(){
        console.log('ADDING ONE')
    }
    handleMinusOne(){
        console.log('SUBTRACTING ONE')
    }
    handleReset(){
        console.log('Clearing your options')
    }

    render(){
        return(
            <div>
                <h1>Count: </h1>
                <button>+1</button>
                <button>-1</button>
                <button>Clear</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
console.log('WILL you work')

