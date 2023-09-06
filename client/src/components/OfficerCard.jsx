import React from 'react'

const OfficerCard = ({photo, name, role, linkedin, github, website}) => {
  return (
    <div className="transition duration-200 ease-in-out bg-slate-100 rounded-xl shadow-md hover:shadow-2xl">
      <h1>{role}</h1>
      <img src={photo} alt={name} className="max-w-[240px] h-auto rounded-xl object-cover"/>
    </div>
  )
}

export default OfficerCard