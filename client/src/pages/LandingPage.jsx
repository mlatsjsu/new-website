import React from 'react'
import logo from "../../images/logo.svg";
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div>
      <div id="front" className="h-[100vh]">
				<div class="area">
					<ul class="circles">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
			<div id="front-message" className="w-full absolute h-[100vh] top-0 left-0">
				<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
					<img className="h-[35%]" src={logo} alt="logo" />
				</div>
			</div>
    </div>
  )
}

export default LandingPage