import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../style/footer.css"

function Footer() {
    const navigation = useNavigate()
  return (
    <div className='footer'>
        <div className='rightfooter'>
         
            <p> Adderess : Rewa Madhya pradesh , India</p>
            <p>Contact no: +91-903923-0788</p>
            <p>E-mail : shivamsingh01042001@gmail.com</p>
        </div>
        <div className='leftfooter'>
          <p>About Shivam .</p>
<p>This is Shivam singh. Frontend Developer <br/>Trainee at DigiKull. I enjoy Developing new Projects <br/>and design challenges</p>
<div>
   
   
  <a href='https://www.linkedin.com/in/shivam-singh-a9405324b/' target='blank'> <img src="https://static.vecteezy.com/system/resources/previews/018/930/585/original/linkedin-logo-linkedin-icon-transparent-free-png.png" className='imag'/> </a>
  <a href='https://github.com/code-shivam?tab=repositories' target='blank'>
  <img src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png'  className='imag'/></a>
  
</div>
        </div>
    </div>
  )
}

export default Footer