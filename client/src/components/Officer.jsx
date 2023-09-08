import React from 'react'
import OfficerCard from './OfficerCard'
import Trique from '../../images/officers/trique.jpg'
import Auni from '../../images/officers/Auni.jpg'
import RahulK from '../../images/officers/RahulKandekar.jpg'
import RahulR from '../../images/officers/RahulRaju.jpg'
import Daniel from '../../images/officers/daniel.jpg'
import Milind from '../../images/officers/Milind.jpg'
import Haydon from '../../images/officers/Haydon.jpg'
import Anjali from '../../images/officers/Anjali.jpg'
import Vlad from '../../images/officers/vlad.jpg'
import Gautham from '../../images/officers/gautham.jpg'

const Officer = () => {
  const officers = [
    {
      name: "Auni Bagchi",
      role: "President",
      linkedin: "https://www.linkedin.com/in/aunibagchi/",
      photo: Auni
    },
    {
      name: "Vlad Makarenko",
      role: "Treasurer",
      linkedin: "https://www.linkedin.com/in/volodymyr-makarenko-0294ab135/",
      photo: Vlad
    },
    {
      name: "Anjali Kadiyala",
      role: "Event Coordinator",
      photo: Anjali
    },
    {
      name: "Gautham Narayanan",
      role: "Outreach Coordinator",
      photo: Gautham
    },
    {
      name: "Trique Nguyen",
      role: "Webmaster",
      linkedin: "https://www.linkedin.com/in/trique-nguyen/",
      github: "https://github.com/triquenguyen",
      website: "https://triquenguyen.tech/",
      photo: Trique
    },
    {
      name: "Rahul Kandekar",
      role: "Academic Committee",
      linkedin: "https://www.linkedin.com/in/rahul-kandekar/",
      photo: RahulK
    },
    {
      name: "Haydon Behl",
      role: "Academic Committee",
      photo: Haydon
    },
    {
      name: "Milind Pathak",
      role: "Event Coordinator",
      photo: Milind
    },
    {
      name: "Rahul Raju",
      role: "Public Relations",
      photo: RahulR
    },
    {
      name: "Daniel Ung",
      role: "Public Relations",
      photo: Daniel
    },
    
    
  ]
  return (
    <div className="flex flex-col items-center justify-center gap-12 sm:gap-8 max-w-[1280px] mb-24">
      <h1 className='font-extrabold text-5xl sm:text-3xl'>Meet the Board</h1>
      <div className="xl:grid xl:grid-cols-3 gap-10 sm:flex sm:flex-wrap md:flex md:flex-wrap md:items-center md:justify-center">
        {officers.map((officer) => (
          <OfficerCard photo={officer.photo} name={officer.name} role={officer.role} linkedin={officer.linkedin} github={officer.github} website={officer.website} />
        ))}
      </div>  
    </div>
  )
}

export default Officer