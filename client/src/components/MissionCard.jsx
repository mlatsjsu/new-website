import React from 'react'

const MissionCard = ({mission, icon, position}) => {

  if (position === "left") {
    return (
      <div className="flex items-center justify-center bg-gray-300 px-8 py-4 gap-6 rounded-full">
        <p className="text-gray-700 font-semibold text-lg mr-auto text-left">
          {mission}
        </p>
        <img src={icon} alt="networking" className="w-48 h-48" />
      </div>
    )
  } else {
    return (
      <div className="flex items-center justify-center px-8 py-4 gap-6 ">
        <img src={icon} alt="networking" className="w-48 h-48" />
        <p className="text-gray-700 font-semibold text-lg mr-auto">
          {mission}
        </p>
      </div>
    )
  }



}

export default MissionCard