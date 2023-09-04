import React from 'react'
import logo from "../../images/logo.svg";
import "./LandingPage.css"
import Information from '../components/Information';
import ParticleBg from '../components/ParticleBg';
import Introduction from '../components/Introduction';
import ScrollDown from '../components/ScrollDown';

const LandingPage = () => {
	return (
		<div>
			<ParticleBg />
			<div className="w-full absolute">
				<div className="h-[100vh] flex flex-col justify-center items-center">
					<img className="h-64" src={logo} alt="logo" />
					<Information />
					<ScrollDown />
				</div>

				<Introduction />
			</div>
		</div>
	)
}

export default LandingPage
