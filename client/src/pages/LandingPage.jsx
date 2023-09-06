import React from 'react'
import "./LandingPage.css"
import GetInvolved from '../components/GetInvolved';
import HomeScreen from '../components/HomeScreen';
import Navbar from '../components/Navbar';
import Mission from '../components/Mission';

const LandingPage = () => {
	return (
		<div className="">
			<HomeScreen />
			<Mission />
		</div>
	)
}

export default LandingPage
