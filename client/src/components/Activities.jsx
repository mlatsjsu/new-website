import React from 'react'
import activity from "../../images/activity.jpg"

const Activities = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="md:w-[75vw] 2xl:w-[60vw] bg-gradient-to-r from-[#bcbcfc] via-[#4464e4] to-[#7c54ac] flex flex-col gap-8 sm:gap-4 justify-center px-16 py-10 sm:px-8 sm:py-8 rounded-2xl">
        <h1 className="font-extrabold text-3xl">Activities</h1>
        <div className="flex gap-10 sm:gap-6 justify-center items-center sm:flex-col">
          <div className="text-left leading-relaxed space-y-6 font-medium text-lg">
            <p>We host machine learning workshops, reading groups,
              and guest speakers. Through projects, our members get
              hands-on training. We focus on career development by
              conducting resume workshops, mock interviews, and
              networking events.
            </p>
            {/* <p>Keep up with our events at </p> */}
          </div>
          <img src={activity} alt="activity" className="rounded-lg md:h-72 2xl:h-80" />
        </div>

      </div>
    </div>
  )
}

export default Activities