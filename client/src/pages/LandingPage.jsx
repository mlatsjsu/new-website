import React from 'react'
import "./LandingPage.css"
import HomeScreen from '../components/HomeScreen';
import Mission from '../components/Mission';
import Activities from '../components/Activities';
import Officer from '../components/Officer';

const LandingPage = () => {
	return (
		<div className="px-16 sm:px-4 flex flex-col items-center justify-center gap-24 max-w-[1280px]">
			<HomeScreen />
			<Mission />
			<Activities />
			<Officer />
		</div>
	)
}

export default LandingPage
