import React from 'react'

function Popup(props) {
  return (
    props.tigger ?
    <div className=''>
      <div className=''>
        <button className=''>X</button>
        {props.children}
      </div>
    </div>:""
  )
}

export default Popup