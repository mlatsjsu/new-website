import { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
	return (
		<>
			<div className="bg-neutral-100 flex flex-col justify-center items-center">
				<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path= '/about' element = {<About />} />
				</Routes>
				<Footer />
				</BrowserRouter>

			</div>
		</>
	);
}

export default App;
