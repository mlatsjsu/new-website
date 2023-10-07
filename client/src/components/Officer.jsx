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
import StasTiomkin from '../../images/officers/StasTiomkin.jpg'
import CarlosRojas from '../../images/officers/carlosrojas.jpg'

const Officer = () => {
  const officers = [
    {
      name: "Carlos Rojas",
      role: "Staff Advisor",
      // linkedin: "https://www.linkedin.com/in/aunibagchi/",
      photo: CarlosRojas
    },
    {
      name: "Stas Tiomkin",
      role: "Staff Advisor",
      // linkedin: "https://www.linkedin.com/in/aunibagchi/",
      photo: StasTiomkin
    },
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
      linkedin: "https://www.linkedin.com/in/anjalikadiyala19/",
      photo: Anjali
    },
    {
      name: "Gautham Narayanan",
      role: "Outreach Coordinator",
      linkedin: "https://www.linkedin.com/in/gauthamnarayanan/",
      photo: Gautham
    },
    {
      name: "Trique Nguyen",
      role: "Webmaster",
      linkedin: "https://www.linkedin.com/in/trique-nguyen/",
      // github: "https://github.com/triquenguyen",
      // website: "https://triquenguyen.tech/",
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
      linkedin: "https://www.linkedin.com/in/haydon-behl-b659011a6",
      photo: Haydon
    },
    {
      name: "Milind Pathak",
      role: "Event Coordinator",
      linkedin: "https://www.linkedin.com/in/milindpathak9/",
      photo: Milind
    },
    {
      name: "Rahul Raju",
      role: "Public Relations",
      linkedin: "https://www.linkedin.com/in/rahul-raju-354792265/",
      photo: RahulR
    },
    {
      name: "Daniel Ung",
      role: "Public Relations",
      linkedin: "https://www.linkedin.com/in/danielung22/",
      photo: Daniel
    },
    
    
  ]
  return (
    <div className="flex flex-col items-center justify-center gap-16 sm:gap-8 max-w-[1280px] mb-24">
      <h1 className='font-bold text-5xl sm:text-3xl'>Meet the Board</h1>
      <div className="xl:grid xl:grid-cols-3 gap-10 sm:flex sm:flex-wrap md:flex md:flex-wrap md:items-center md:justify-center">
        {officers.map((officer) => (
          <OfficerCard photo={officer.photo} name={officer.name} role={officer.role} linkedin={officer.linkedin} github={officer.github} website={officer.website} />
        ))}
      </div>  
    </div>
  )
}

export default Officer