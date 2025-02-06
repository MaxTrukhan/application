import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetail = () => {
  const params = useParams()
  const { projectId } = params
  return (
    <div>
      {projectId}
    </div>
  )
}

export default ProjectDetail
