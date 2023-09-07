import React from 'react'

const OfficerCard = ({ photo, name, role, linkedin, github, website }) => {
  return (
    <div className="max-w-[200px] flex flex-col items-center">
      <h1>{role}</h1>
      <img src={photo} alt={name} className="max-w-[150px] h-auto rounded-full object-cover" />
      <div className="mt-[12px] flex flex-col justify-center items-center">
        <div className="text-[18px] text-[#62a1ff]">{name}</div>
        <div className="text-[12px] text-[#757575]">
          {website}
        </div>
        <div className="text-[12px] text-[#757575]">{role}</div>
      </div>
    </div>
  )
}

export default OfficerCard