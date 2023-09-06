import React from 'react'
import networking from "../../images/network.png"
import machineLearning from "../../images/deep-learning.png"
import coding from "../../images/code.png"
import solution from "../../images/solution.png"
import MissionCard from './MissionCard'

const Mission = () => {
  const missions = [
    {
      mission: "Create a professional, supportive network for machine learning at San Jose State University",
      icon: networking,
      position: "left",
    },
    {
      mission: "Prepare students with practical machine learning skills",
      icon: coding,
      position: "right",
    },
    {
      mission: "Reach underrepresented communities to solve globally impactful problems",
      icon: solution,
      position: "left",
    },
    {
      mission: "Prove our community's expertise in machine learning",
      icon: machineLearning,
      position: "right",
    },
  ]
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <h1 className="font-black text-3xl">Our Mission</h1>
      <div className=" flex flex-col gap-8 items-center justify-center">
        {missions.map((mission) => (
          <MissionCard mission={mission.mission} icon={mission.icon} position={mission.position} />
        ))}
      </div>
    </div>
  )
}

export default Mission