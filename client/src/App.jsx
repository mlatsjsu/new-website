import { useState } from "react";
import "./App.css";
import logo from "../images/logo.svg";
import LandingPage from "./pages/LandingPage"

function App() {
	return (
		<div className="">
			<LandingPage />
			
			<div id="second" className="h-[100vh]"></div>

			<div id="footer" className="h-[30vh] bg-slate-600"></div>
		</div>
	);
}

export default App;
