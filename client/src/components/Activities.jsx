import React from 'react'
import activity from "../../images/activity.jpg"

const Activities = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="bg-gradient-to-r from-[#bcbcfc] via-[#4464e4] to-[#7c54ac] flex flex-col gap-12 sm:gap-4 justify-center px-16 py-10 sm:px-4 sm:py-8 rounded-2xl shadow-xl">
        <h1 className="font-extrabold text-5xl sm:text-3xl">Activities</h1>
        <div className="flex gap-10 sm:gap-6 justify-center items-center sm:flex-col">
          <div className="text-left leading-relaxed space-y-6 font-medium text-lg">
            <p className="2xl:max-w-[540px]">We host machine learning workshops, reading groups,
              and guest speakers. Through projects, our members get
              hands-on training. We focus on career development by
              conducting resume workshops, mock interviews, and
              networking events.
            </p>
          </div>
          <img src={activity} alt="activity" className="rounded-lg md:h-64 2xl:h-72" />
        </div>

      </div>
    </div>
  )
}

export default Activities