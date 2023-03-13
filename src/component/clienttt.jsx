import React from 'react'

const Clienttt = (props) => {
  return (
    <div className='info'>
        <div>
        
       <h1>{props.fullname}</h1>
       <h2>{props.lastname}</h2>
       <h2>{props.age}</h2>
       <h2>{props.phone}</h2>
       <h2>{props.mail}</h2>
        <button>delete</button>
     
       </div>
    </div>
  )
}

export default Clienttt