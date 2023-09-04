import React from 'react'
import LinkedIn from "./../../images/linkedin.png"
import Location from "../../images/location.png";
import TimeTable from "../../images/timetable.png";

const Information = () => {
  return (
    <div className='flex gap-6 items-center justify-center'>
      <a 
        href="https://www.linkedin.com/company/mlatsjsu/about/" 
        target="_blank"
        className="flex gap-2 items-center">
        <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />
        <p className="text-white text-lg">ML@SJSU</p>
      </a>

      <a 
        href="https://www.linkedin.com/company/mlatsjsu/about/" 
        target="_blank"
        className="flex gap-2 items-center">
        <img src={Location} alt="LinkedIn" className="w-8 h-8" />
        <p className="text-white text-lg">SJSU BBC</p>
      </a>

      <a 
        href="https://www.linkedin.com/company/mlatsjsu/about/" 
        target="_blank"
        className="flex gap-2 items-center">
        <img src={TimeTable} alt="LinkedIn" className="w-8 h-8" />
        <p className="text-white text-lg">Friday MM/DD/YY</p>
      </a>

    </div>
  )
}

export default Information