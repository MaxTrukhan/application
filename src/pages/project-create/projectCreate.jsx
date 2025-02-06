import React from 'react'
import './projectCreate.css'
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";

const ProjectCreate = () => {
    
  return (
    <div className='new'>
          <form>
              <div className='flexDiv'>
                <label>Project ID</label> 
                <input id='projectID'/>
              </div>
              <div className='flexDiv'>
                <label>Project Name</label> 
                <input id='projectName'/>
              </div>
              <div className='flexDiv' style={{ alignItems: 'flex-start' }}>
                <label>Description</label> 
                <textarea id='Description'/>
              </div>

                <div className='dates'>
                    <label>Start Date</label> 
                    <DatePicker/>    
                </div>
                <div className='dates'>
                    <label>End Date</label> 
                    <DatePicker />
                </div>
                
            
              <div className='flexDiv'>
                <label>Project Manager</label> 
                <input id='ProjectManager'/>
              
              </div>
               
              <button className='Edit' style={{width:' 10%', marginLeft: '30%'}}>Edit</button>
        </form>
          
    </div>
  )
}

export default ProjectCreate
