import React from 'react'
import './projectCreate.css'
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";
import {z} from 'zod'
import { useForm, Controller  } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
    const schema = z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
        projectManager: z.string()
    })

const ProjectCreate = () => {

    const {
        register,
        handleSubmit,
        control
    } = useForm({
    resolver: zodResolver(schema),
    }) 
    
    const onSubmit = (data) => {
        console.log('work')
    }
  return (
    <div className='new'>
          <form onSubmit={() => handleSubmit(onSubmit)}>
              <div className='flexDiv'>
                <label>Project ID</label> 
                <input {...register('id')} required id='projectID'/>
              </div>
              <div className='flexDiv'>
                <label>Project Name</label> 
                <input {...register('name')} required id='projectName'/>
              </div>
              <div className='flexDiv' style={{ alignItems: 'flex-start' }}>
                <label>Description</label> 
                <textarea {...register('description')} required id='Description'/>
              </div>

                <div className='dates'>
                    <label>Start Date</label> 
                     <Controller
                        name="startDate"
                        control={control} // Use control for DatePicker
                        render={({ field }) => <DatePicker {...field}  />}
                    />   
                </div>
                <div className='dates'>
                    <label>End Date</label> 
                     <Controller
                        name="endDate"
                        control={control} // Use control for DatePicker
                        render={({ field }) => <DatePicker {...field} />}
                    />
                </div>
                
            
              <div className='flexDiv'>
                <label>Project Manager</label> 
                <input {...register('projectManager')} id='ProjectManager'/>
              
              </div>
               
              <button type='Submit' className='Edit' style={{width:' 10%', marginLeft: '30%'}}>Edit</button>
        </form>
          
    </div>
  )
}

export default ProjectCreate
