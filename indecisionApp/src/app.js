import React from 'react'
import ReactDOM from 'react-dom'
import AddOption from './components/AddOption.js'
import Header from './components/Header'
import Action from './components/Action'
import Options from './components/Options'


// stateless functional component

class IndecisionApp extends React.Component {
    constructor(props) {
      super(props)
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
      this.handlePick = this.handlePick.bind(this)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.handleDeleteOption = this.handleDeleteOption.bind(this)
      this.state = {
        options: []
      }
    }
    componentDidMount() {
      try {
        const json = localStorage.getItem('options')
        const option = JSON.parse(json)
        console.log(option)
        if (option) {
          this.setState(() => ({ option }))
        }
      } catch (e){
        //do nothing at all. 
      }
    }
    componentDidUpdate(prevProps, prevState){
      //If the previous state is not the same as the current state. 
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
      }
    }
    componentWillUnmount(){
      console.log('component will unmount')
    }
    handleDeleteOptions() {
      this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }))
    }
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[randomNum]
      alert(option)
    }
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item'
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists'
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }))
    }
    render() {
      const subtitle = 'Let this app decide what you wanna do'
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      )
    }
  }
  

  

 
  

  
  
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
  