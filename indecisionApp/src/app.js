import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

const Layout = (props) => {
    return(
    <div>
        <p>Header</p>
        {props.children}
        <p>Footer</p>
    </div>
    )
}
const template = (
    <div>
        <h1>Page Title</h1>
        <p>Actual page content</p>
    </div>
)




ReactDOM.render(<Layout><p>THIS IS INLINE</p></Layout>, document.getElementById('app'))
  