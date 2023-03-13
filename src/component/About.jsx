import React from 'react'

import { useNavigate } from 'react-router-dom'


const About = () => {
    let navigate=useNavigate()
  return (
    <div className='about'>
   <video  width="100%" height="100%"  controls >
      <source src="https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4" type="video/mp4"/>
     </video>
     <h1>title</h1>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa <br />
        eos accusamus nihil quibusdam. Quaerat quae nulla soluta? Doloremque, <br />
        blanditiis ipsam nam obcaecati commodi dolor et, earum ipsum, explicabo cumque assumenda.</p>
   <button onClick={()=>navigate("./Clients")}> show </button>
    </div>

  )
}

export default About