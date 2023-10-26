import React from 'react'
import logo from "../../images/logo.svg";
import Typed from 'react-typed'
import Officer from '../components/Officer';
import OfficerCard from '../components/OfficerCard';
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
import LinkedIn from '../../images/linkedin2.svg'
import GitHub from '../../images/github.svg'
import Portfolio from '../../images/portfolio.png'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/Instagram_logo_2016.svg.png'
import youtube from '../../images/youtube.png'


const About = () => {
    const yt = 'https://www.youtube.com/channel/UCmC0mWgwdG9J8F7X1xjAcGg'
    const li = 'https://www.linkedin.com/company/sjsumlclub/'
    const ig = 'https://www.instagram.com/sjsuml/'
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
        <>
        
            <div className ='w-[1700px] bg-custom-background bg-cover bg-center max-h-screen'>
                <div className='max-w-[1550px] mt-[50px] w-full h-[100vh] mx-auto text-center flex flex-col'>
                    <span className='flex justify-center'><img className='h-40' src={logo} alt="logo" /></span>
                    {/* <p className='text-[#000000] font-bold p-2 text-6xl'>ML@SJSU</p> */}
                    <span className='flex justify-end mt-[70px]'>
                        <a href={li} target="_blank"><img src={linkedin} className="w-11 h-11"></img></a>
                    </span>
                    <span className='flex justify-end mt-[80px]'>
                        <a href={ig} target='_blank'><img src={instagram} className='w-11 h-11'></img></a>
                    </span>
                    <span className='flex justify-end mt-[90px]'>
                        <a href={yt} target='_blank'><img src={youtube} className='w-12 h-12'></img></a>
                    </span>
                    <div className='text-white text-6xl w-[980px] mt-[-300px] mx-auto justify-center text-center items-center '>
                        <h1>We are a community of machine learning enthusiasts who build collaborative projects tackling <span className='text-orange-400'> <Typed strings = {['diverse','interesting','real-world']} 
                            typeSpeed = {100} backSpeed = {100} loop /> </span> problems.</h1>
                    </div>
                </div> 
            </div>
            <div className="flex flex-col items-center justify-center gap-16 sm:gap-8 max-w-[1280px] mb-24 mt-[60px]">
                <h1 className=' font-bold text-5xl sm:text-3xl'>Meet the Board</h1>
                <div className="xl:grid xl:grid-cols-3 gap-10 sm:flex sm:flex-wrap md:flex md:flex-wrap md:items-center md:justify-center">
                {officers.map((officer) => (
                <OfficerCard photo={officer.photo} name={officer.name} role={officer.role} linkedin={officer.linkedin} github={officer.github} website={officer.website} />
            ))}
      </div>  
    </div>
            </>
        )
}

export default About

