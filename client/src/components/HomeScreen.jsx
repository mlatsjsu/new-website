import React from 'react'
import Information from './Information';
import ParticleBg from './ParticleBg';
import ScrollDown from './ScrollDown';
import Navbar from './Navbar';
import GetInvolved from './GetInvolved';
import homescreen from "../../images/homescreen.jpg";
import JoinUs from './JoinUs';

const HomeScreen = () => {
  return (
    <div className="h-screen">
      {/* <ParticleBg /> */}
        <Navbar />
        <div className="h-[75vh] flex flex-col justify-center items-center">
          <div className="flex 2xl:w-[75vw] px-16 items-center gap-12">
            <div className="flex flex-col gap-10 text-left">
              <p className="text-xl md:text-3xl text-gray-700 font-bold leading-relaxed"> 
                We are a community of machine learning enthusiasts
                who build collaborative projects tackling
                diverse, interesting problems.
              </p>
              <Information />
              <JoinUs />
            </div>
            <img src={homescreen} className="h-56 md:h-96" />
          </div>

          <ScrollDown />
        </div>
    </div>
  )
}

export default HomeScreen
