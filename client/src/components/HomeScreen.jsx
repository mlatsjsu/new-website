import React from 'react'
import Information from './Information';
import ParticleBg from './ParticleBg';
import ScrollDown from './ScrollDown';
import Navbar from './Navbar';
import homescreen from "../../images/homescreen.jpg";
import LinkToButton from './LinkToButton';

const HomeScreen = () => {
  return (
    <div className="h-screen">
      {/* <ParticleBg /> */}
      <div className="md:h-[75vh] sm:h-[90vh] flex flex-col justify-center items-center">
        <div className="flex sm:flex-col 2xl:w-[75vw] items-center md:gap-10">
          <div className="flex flex-col md:gap-10 gap-6 text-left">
            <p className="md:text-3xl sm:text-2xl text-gray-700 font-bold leading-loose">
              We are a community of machine learning enthusiasts
              who build collaborative projects tackling
              diverse, interesting problems.
            </p>
            <Information />
            <LinkToButton url="https://discord.gg/dQdSnpt3u8" text="Join Us on Discord" />
          </div>
          <img src={homescreen} className="h-56 md:h-96 lg:h-2/5 sm:mt-12 rounded-xl" />
        </div>

        <ScrollDown />
      </div>
    </div>
  )
}

export default HomeScreen
