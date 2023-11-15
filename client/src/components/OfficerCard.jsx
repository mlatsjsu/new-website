import React from 'react'
import LinkedIn from '../../images/linkedin2.svg'
import GitHub from '../../images/github.svg'
import Portfolio from '../../images/portfolio.png'
import { joinPaths } from '@remix-run/router'

const OfficerCard = ({ photo, name, role, linkedin, github, website }) => {
  return (
    <div className="flex gap-6 hover:scale-110 duration-300">

      <img src={photo} alt={name} className="rounded-full object-cover w-40 h-40 shadow-lg" />

      <div className=" flex flex-col justify-center text-left gap-2">
        <h1 className="text-lg font-bold text-[#62a1ff]">{name}</h1>
        <h1 className="text-[#f48604]">{role}</h1>
        <div className="flex gap-2">
          {linkedin && <a href={linkedin} target="_blank"><img src={LinkedIn} className="w-5 h-5"></img></a>}
          {github && <a href={github} target="_blank"><img src={GitHub} className="w-5 h-5"></img></a>}
          {website && <a href={website} target="_blank"><img src={Portfolio} className="w-5 h-5"></img></a>}
        </div>

      </div>
    </div>
  )
}

export default OfficerCard


