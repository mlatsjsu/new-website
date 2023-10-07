import React from 'react'
import Information from './Information';
import ParticleBg from './ParticleBg';
import ScrollDown from './ScrollDown';
import Navbar from './Navbar';
import homescreen from "../../images/homescreen.jpg";
import LinkToButton from './LinkToButton';
import { useEffect, useState } from 'react';

const HomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [height, setHeight] = useState(0)
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {  
         isVisible && setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };

  return (
      <div className="h-[80vh] sm:h-[90vh] flex justify-center items-center">
        <div className="flex sm:flex-col items-center md:gap-10">
          <div className="flex flex-col md:gap-10 gap-6 text-left justify-center sm:items-center">
            <p className="md:text-3xl sm:text-2xl text-gray-700 font-bold leading-loose sm:text-center">
              We are a community of machine learning enthusiasts
              who build collaborative projects tackling
              diverse, interesting problems.
            </p>
            <Information />
            <LinkToButton url="https://discord.gg/dQdSnpt3u8" text="Join Us on Discord" color="from-[#bcbcfc] via-[#4464e4] to-[#7c54ac]" />
          </div>
          <img src={homescreen} className="md:max-w-[400px] xl:max-w-[480px] sm:mt-12 rounded-xl shadow-lg" />
        </div>

        {isVisible && <ScrollDown />}
      </div>
  )
}

export default HomeScreen
