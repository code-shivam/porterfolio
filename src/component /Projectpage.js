import React from 'react'
import "../style/project.css"
import Project from './Project'

function Projectpage() {
  return (
    <div >
        <div className='pagecontainer'>
            <h1>PROJECT .</h1>
            <p>some of my project</p>


        </div>
        <div>
            <Project/>
        </div>
        

    </div>
  )
}

export default Projectpage