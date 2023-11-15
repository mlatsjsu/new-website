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
import Portfolio from '../../images/portfolio.png'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/Instagram_logo_2016.svg.png'
import youtube from '../../images/youtube.png'
import LinkedIn from "./../../images/linkedin.png"
import Location from "../../images/location.png";
import TimeTable from "../../images/timetable.png";
import LinkToButton from '../components/LinkToButton';
import MissionB from '../components/MissionB';
import Activities from '../components/Activities';
import ActivitiesB from '../components/ActivitiesB';
import activity from '../../images/activity.jpg'

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
      <div className='w-full bg-custom-background bg-cover bg-center h-[95vh]'>
          <div className='max-w-[1500px] mt-[50px] w-full h-[100vh] mx-auto text-center flex flex-col'>
            {/* <p className='text-[#000000] font-bold p-2 text-6xl'>ML@SJSU</p> */}
            <span className='flex justify-center'><img className='h-40' src={logo} alt="logo" /></span>
            <div className='flex justify-end flex-col mt-[150px] gap-14'>



            </div>
              {/* <span className='flex justify-end mt-[-200px]'>
              <a href={li} target="_blank"><img src={linkedin} className="w-11 h-11"></img></a>
              </span>
              <span className='flex justify-end mt-[80px]'>
              <a href={ig} target='_blank'><img src={instagram} className='w-11 h-11'></img></a>
              </span>
              <span className='flex justify-end mt-[90px]'>
              <a href={yt} target='_blank'><img src={youtube} className='w-12 h-12'></img></a>
              </span> */}
              <div className='sm:text-3xl sm:w-[440px] md:flex text-white text-6xl w-[980px] mt-[-130px] mx-auto text-center items-center '>
              <h1>We are a community of machine learning enthusiasts who build collaborative projects tackling <span className='text-orange-400'> <Typed strings={['diverse', 'interesting', 'real-world']}
              typeSpeed={100} backSpeed={100} loop /> </span> problems.</h1>
      
      
            </div>
                  <div className='flex flex-row justify-center mt-[70px] gap-32'>
                    <a
                      target="_blank"
                      className="flex gap-2 items-center">
                      <img src={Location} alt="LinkedIn" className="md:w-12 md:h-12 w-8 h-8" />
                      <p className="text-white font-semibold md:text-lg">BBC 326</p>
                    </a>

                    <a
                      target="_blank"
                      className="flex gap-2 items-center">
                      <img src={TimeTable} alt="LinkedIn" className="md:w-12 md:h-12 w-5 h-5" />
                      <p className="text-white font-semibold md:text-lg">Friday<br/>11-12:30PM</p>
                    </a>
                  </div>

          </div>
        </div>
      <div className='mt-[-240px]'>
        <LinkToButton url="https://discord.gg/dQdSnpt3u8" text="Join Us on Discord" color="from-[#bcbcfc] via-[#4464e4] to-[#7c54ac]" />
      </div>
      <div className='mt-[300px]'>
      <h1 className="font-bold text-5xl sm:text-3xl">Our Mission</h1>
      </div>
      <div className='mt-[100px]'>
        <MissionB />
      </div>
      <div className='w-[1400px] mt-[100px]'>
        <h1 className="font-bold text-5xl sm:text-3xl">Activities</h1>
        <p className="max-w-[500px] mt-[120px] ml-[70px] text-3xl text-center">We host machine learning workshops, reading groups,
              and guest speakers. Through projects, our members get
              hands-on training. We focus on career development by
              conducting resume workshops, mock interviews, and
              networking events.
        </p>
        <img src={activity} alt="activity" className="rounded-lg md:h-64 2xl:h-96  mt-[-350px] ml-auto" />
      </div>
    
      <div className="flex flex-col items-center justify-center gap-16 sm:gap-8 max-w-[1280px] mb-24 mt-[120px]">
        <h1 className=' font-bold text-5xl sm:text-3xl'>Meet the Board</h1>
        <div className="xl:grid xl:grid-cols-3 gap-10 sm:flex sm:flex-wrap md:flex md:flex-wrap md:items-center md:justify-center mt-[10px]">
          {officers.map((officer) => (
            <OfficerCard photo={officer.photo} name={officer.name} role={officer.role} linkedin={officer.linkedin} github={officer.github} website={officer.website} />
          ))}
        </div>
      </div>
    </>
  )
}

export default About



