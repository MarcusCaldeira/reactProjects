import React from 'react'

const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button
          onClick={(e) => {
            //Created a function that is passed up as a function
            props.handleDeleteOption(props.optionText)
          }}
        >
          remove
        </button>
      </div>
    )
  }
  export default Option