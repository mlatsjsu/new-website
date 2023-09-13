import React from 'react'

const MissionCard = ({mission, icon, position}) => {

  if (position === "left") {
    return (
      <div className="flex items-center justify-center bg-gradient-to-r from-[#ffbc08] via-[#fcac04] to-[#f48604] px-16 py-8 sm:px-4 sm:gap-2 sm:rounded-2xl gap-6 rounded-full md:w-[720px] shadow-xl">
        <p className="text-gray-700 font-medium text-lg mr-auto text-left">
          {mission}
        </p>
        <img src={icon} alt="networking" className="w-32 h-32 sm:w-16 sm:h-16" />
      </div>
    )
  } else {
    return (
      <div className="flex items-center justify-center px-8 py-4 gap-12 sm:px-4 sm:gap-2 ">
        <img src={icon} alt="networking" className="w-32 h-32 sm:w-16 sm:h-16" />
        <p className="text-gray-700 font-medium text-lg mr-auto text-left">
          {mission}
        </p>
      </div>
    )
  }



}

export default MissionCard