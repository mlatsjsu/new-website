import React from 'react'
import LinkedIn from "./../../images/linkedin.png"
import Location from "../../images/location.png";
import TimeTable from "../../images/timetable.png";

const Information = () => {
  return (
    <div className='flex sm:flex-col md:first-letter md:gap-6 gap-2 items-center mb-4'>
      <a
        href="https://www.linkedin.com/company/mlatsjsu/about/"
        target="_blank"
        className="flex gap-2 items-center">
        <img src={LinkedIn} alt="LinkedIn" className="md:w-8 md:h-8 w-5 h-5" />
        <p className="text-gray-700 font-semibold md:text-lg">ML@SJSU</p>
      </a>

      <a
        target="_blank"
        className="flex gap-2 items-center">
        <img src={Location} alt="LinkedIn" className="md:w-8 md:h-8 w-5 h-5" />
        <p className="text-gray-700 font-semibold md:text-lg">BBC 326</p>
      </a>

      <a
        target="_blank"
        className="flex gap-2 items-center">
        <img src={TimeTable} alt="LinkedIn" className="md:w-8 md:h-8 w-5 h-5" />
        <p className="text-gray-700 font-semibold md:text-lg">Friday<br/>11-12:30PM</p>
      </a>

    </div>
  )
}

export default Information