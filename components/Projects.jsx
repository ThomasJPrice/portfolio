'use client'

import React, { useState } from 'react'
import { ProjectCard } from '.'

const Projects = ({ projects }) => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {projects.map((item, index) => (
        <ProjectCard
          key={item+index}
          index={index}
          project={item}
          open={openIndex === index}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  )
}

export default Projects